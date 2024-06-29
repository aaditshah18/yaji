import { GitHub } from "../Icons";

export default function GitHubLink() {
  return (
    <a
      target="_blank"
      href="https://github.com/aaditshah18/yaji"
      rel="noreferrer"
    >
      <div className="cursor-pointer hover:opacity-75">
        <GitHub />
      </div>
    </a>
  );
}