import { createRoot } from "react-dom/client";
import { Component, useEffect, useState, type ReactNode } from "react";
export function mount(element: ReactNode) {
  createRoot(document.getElementById("root")!).render(
    <Boundary>{element}</Boundary>,
  );
}
export function useTheme() {
  const media = matchMedia("(prefers-color-scheme: dark)");
  const initial = new URLSearchParams(location.search).get("theme");
  const [theme, setTheme] = useState<"light" | "dark">(
    initial === "dark" || (initial !== "light" && media.matches)
      ? "dark"
      : "light",
  );
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (
        event.origin !== location.origin ||
        event.source !== parent ||
        event.data?.type !== "notes-embed:v1:theme"
      )
        return;
      if (event.data.theme === "dark" || event.data.theme === "light")
        setTheme(event.data.theme);
      for (const name of [
        "light",
        "lightgray",
        "gray",
        "darkgray",
        "dark",
        "secondary",
        "tertiary",
        "bodyFont",
      ]) {
        const value = event.data.tokens?.[name];
        if (typeof value === "string")
          document.documentElement.style.setProperty("--" + name, value);
      }
    };
    const system = () => {
      if (parent === window && initial !== "dark" && initial !== "light")
        setTheme(media.matches ? "dark" : "light");
    };
    window.addEventListener("message", receive);
    media.addEventListener("change", system);
    const resize = new ResizeObserver(() =>
      parent.postMessage(
        {
          type: "notes-embed:v1:height",
          height: Math.ceil(document.body.getBoundingClientRect().height),
        },
        location.origin,
      ),
    );
    resize.observe(document.body);
    parent.postMessage({ type: "notes-embed:v1:ready" }, location.origin);
    return () => {
      resize.disconnect();
      window.removeEventListener("message", receive);
      media.removeEventListener("change", system);
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return theme;
}

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p role="alert">
        This interactive card could not be displayed. Reload the page to try
        again; the worked example remains available above.
      </p>
    ) : (
      this.props.children
    );
  }
}
