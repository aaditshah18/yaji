import ThemeToggle from "../ThemeToggle";
import GitHubLink from "../GitHubLink";

export default function PageHeader () {
  return (
    <div className="sticky top-0 flex justify-between items-center w-full bg-white p-6 border-b border-zinc-400 select-none dark:text-zinc-200 dark:bg-zinc-950 dark:border-zinc-600">
      <div className="text-2xl font-bold">
        📋 yaji
      </div>
      <div className="flex space-x-6">
        <ThemeToggle />
        <GitHubLink />
      </div>
    </div>
  );
}