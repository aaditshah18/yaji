import PageHeader from "./components/PageHeader";
import NoteCard from "./components/NoteCard";
import GitHubLink from "./components/GitHubLink";
import ThemeToggle from "./components/ThemeToggle";

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

      <div className="p-2 flex flex-col space-y-4">
        <NoteCard note={{
          _id: "123",
          title: "",
          creationDate: "1714840940",
          content: "Block quotations are not surrounded by any quotation marks. The punctuation at the end of the block quotation goes before the citation. The ending citation is included on the last line of the block quotation. The text after the block quotation begins on its own line, with no indentation.Block quotations are not surrounded by any quotation marks. The punctuation at the end of the block quotation goes before the citation. The ending citation is included on the last line of the block quotation. The text after the block quotation begins on its own line, with no indentation.Block quotations are not surrounded by any quotation marks. The punctuation at the end of the block quotation goes before the citation. The ending citation is included on the last line of the block quotation. The text after the block quotation begins on its own line, with no indentation.",
        }}
        />
        <NoteCard note={{
          _id: "1234",
          title: "",
          creationDate: "1714840000",
          content: "Block quotations are not surrounded by any quotation marks. ",
        }}
        />
      </div>
    </>
  );
}

export default App;
