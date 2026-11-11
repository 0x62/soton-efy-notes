// One bridge per document, including Quartz SPA navigation and transclusions.
if (!window.__notesEmbedBridge) {
  window.__notesEmbedBridge = true;
  const frames = () => [
    ...document.querySelectorAll("iframe[data-notes-embed]"),
  ];
  const send = (frame) => {
    const style = getComputedStyle(document.documentElement);
    const tokens = Object.fromEntries(
      [
        "light",
        "lightgray",
        "gray",
        "darkgray",
        "dark",
        "secondary",
        "tertiary",
        "bodyFont",
      ].map((k) => [k, style.getPropertyValue("--" + k)]),
    );
    frame.setAttribute("scrolling", "no");
    frame.style.maxHeight = "none";
    frame.style.display = "block";
    frame.contentWindow?.postMessage(
      {
        type: "notes-embed:v1:theme",
        theme:
          document.documentElement.getAttribute("saved-theme") ||
          (matchMedia("(prefers-color-scheme:dark)").matches
            ? "dark"
            : "light"),
        tokens,
      },
      location.origin,
    );
    frame.contentWindow?.postMessage(
      { type: "notes-embed:v1:measure" },
      location.origin,
    );
  };
  const sync = () => frames().forEach(send);
  addEventListener("message", (event) => {
    if (event.origin !== location.origin) return;
    const frame = frames().find((f) => f.contentWindow === event.source);
    if (!frame) return;
    if (event.data?.type === "notes-embed:v1:ready") send(frame);
    const height = event.data?.height;
    // Reject malformed/implausible messages rather than clipping valid content.
    if (
      event.data?.type === "notes-embed:v1:height" &&
      Number.isFinite(height) &&
      height > 0 &&
      height <= 100000
    ) {
      const pixels = Math.ceil(height) + 2 + "px";
      if (frame.style.height !== pixels) frame.style.height = pixels;
    }
  });
  new MutationObserver(sync).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["saved-theme"],
  });
  document.addEventListener("nav", sync);
  document.addEventListener(
    "load",
    (event) => {
      if (
        event.target instanceof HTMLIFrameElement &&
        event.target.matches("[data-notes-embed]")
      )
        send(event.target);
    },
    true,
  );
  document.addEventListener(
    "toggle",
    (event) => {
      if (event.target instanceof HTMLDetailsElement && event.target.open)
        sync();
    },
    true,
  );
  new MutationObserver((records) => {
    if (
      records.some((record) =>
        [...record.addedNodes].some(
          (node) =>
            node instanceof Element &&
            (node.matches("iframe[data-notes-embed]") ||
              node.querySelector("iframe[data-notes-embed]")),
        ),
      )
    )
      sync();
  }).observe(document.body, { childList: true, subtree: true });
  sync();
}
