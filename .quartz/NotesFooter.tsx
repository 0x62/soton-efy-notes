import { QuartzComponent } from "./quartz/components/types";

const NotesFooter: QuartzComponent = ({ displayClass }) => (
  <footer class={displayClass ?? ""}>
    <p>© {new Date().getFullYear()} Ben Lewis</p>
    <p>
      Powered by <a href="https://quartz.jzhao.xyz/">Quartz</a>
    </p>
    <ul>
      <li>
        <a href="https://github.com/0x62/soton-efy-notes">Notes on GitHub</a>
      </li>
      <li>
        <a href="https://uni.bl.je">Original notes site</a>
      </li>
    </ul>
  </footer>
);
NotesFooter.css = `footer { margin-bottom: 4rem; color: var(--darkgray); font-size: .9rem; } footer p { margin: .5rem 0; } footer ul { display: flex; flex-wrap: wrap; gap: 1rem; list-style: none; padding: 0; margin: .5rem 0; }`;
export default NotesFooter;
