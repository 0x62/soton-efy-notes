import { relative } from "node:path";
import { QuartzComponent } from "./quartz/components/types";

const NotesFooter: QuartzComponent = ({ displayClass, fileData, ctx }) => {
  const source = fileData.filePath ? relative(ctx.argv.directory, fileData.filePath) : undefined;
  const sourceURL = source?.endsWith('.md') && !source.startsWith('..') && source !== 'index.md'
    ? 'https://github.com/0x62/soton-efy-notes/blob/master/' + source.split('/').map(encodeURIComponent).join('/')
    : undefined;
  return (
    <footer class={displayClass ?? ""}>
      <p>© {new Date().getFullYear()} Ben Lewis</p>
      {sourceURL && <a href={sourceURL}>View on GitHub</a>}
    </footer>
  );
};
NotesFooter.css = `footer { margin-bottom: 4rem; color: var(--darkgray); font-size: .9rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; } footer p { margin: .5rem 0; }`;
export default NotesFooter;
