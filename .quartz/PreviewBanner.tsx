import { QuartzComponent } from "./quartz/components/types";

const PreviewBanner: QuartzComponent = () => (
  <aside class="quartz-preview-banner" aria-label="Experimental preview">
    Experimental Quartz preview ·{" "}
    <a href="https://uni.bl.je">Original notes site</a>
  </aside>
);
PreviewBanner.css = `.quartz-preview-banner { padding: .65rem 1rem; margin: 1rem 0; border: 1px solid var(--lightgray); border-radius: 6px; font-size: .85rem; }`;
export default PreviewBanner;
