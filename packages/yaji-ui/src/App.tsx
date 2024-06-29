import PageHeader from "./components/PageHeader";
import NoteCard from "./components/Card/Note";
import GitHubLink from "./components/GitHubLink";
import ThemeToggle from "./components/ThemeToggle";
import { DATA_SET } from "./types/dataset.ts";
import NoteEditDrawer from "./components/Editor/Drawer.tsx";
import { useState } from "react";
import { Pen } from "./components/Icons";

function App() {
  const [isOpenEditDrawer, setIsOpenEditDrawer] = useState(false);

  const toggleEditDrawer = () => {
    setIsOpenEditDrawer(v => !v);
  };

  const handleAddClick = () => {
    setIsOpenEditDrawer(true);
  };

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

      <button
        className="fixed z-10 bottom-10 lg:bottom-24 right-16 lg:right-96 ms-10 text-sm border-0 rounded-full p-4 shadow-3xl bg-blue-500 dark:bg-blue-400"
        onClick={handleAddClick}
      >
        <Pen className="text-gray-100 dark:text-zinc-200" />
      </button>

      <NoteEditDrawer
        isOpen={isOpenEditDrawer}
        onClose={toggleEditDrawer}
      />
    </>
  );
}

export default App;
