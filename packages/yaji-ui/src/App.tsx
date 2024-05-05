import PageHeader from "./components/PageHeader";
import NoteCard from "./components/Card/Note";
import GitHubLink from "./components/GitHubLink";
import ThemeToggle from "./components/ThemeToggle";
import { DATA_SET } from "./types/dataset.ts";

function App() {
  return (
    <>
      <PageHeader>
        <div className="text-2xl font-bold">
          📋 yaji
        </div>
        <div className="flex space-x-6">
          <ThemeToggle />
          <GitHubLink />
        </div>
      </PageHeader>

      <div className="flex justify-center">
        <div className="p-2 flex flex-col space-y-4">
          {DATA_SET.map(d => (
            <NoteCard
              key={d._id}
              note={d}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
