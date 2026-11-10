/** Measure intrinsic content, never the iframe viewport (which causes feedback loops). */
export function installEmbedSizing(root: HTMLElement) {
  if (window.parent === window) return () => {};
  let frame = 0,
    last = -1,
    disposed = false;
  const measure = () => {
    frame = 0;
    const box = root.getBoundingClientRect();
    if (box.width <= 0 || box.height <= 0) return; // closed disclosure
    const height = Math.ceil(box.height);
    if (height === last) return;
    last = height;
    parent.postMessage(
      { type: "notes-embed:v1:height", height },
      location.origin,
    );
  };
  const schedule = () => {
    if (!disposed && !frame) frame = requestAnimationFrame(measure);
  };
  const receive = (event: MessageEvent) => {
    if (
      event.source !== parent ||
      event.origin !== location.origin ||
      event.data?.type !== "notes-embed:v1:measure"
    )
      return;
    // Only disable internal scrolling after the same-origin parent acknowledges us.
    document.documentElement.dataset.notesEmbedded = "true";
    last = -1;
    schedule();
  };
  const observer = new ResizeObserver(schedule);
  observer.observe(root);
  window.addEventListener("message", receive);
  window.addEventListener("resize", schedule);
  document.addEventListener("toggle", schedule, true);
  document.fonts?.addEventListener("loadingdone", schedule);
  void document.fonts?.ready.then(schedule);
  parent.postMessage({ type: "notes-embed:v1:ready" }, location.origin);
  schedule();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("message", receive);
    window.removeEventListener("resize", schedule);
    document.removeEventListener("toggle", schedule, true);
    document.fonts?.removeEventListener("loadingdone", schedule);
  };
}
