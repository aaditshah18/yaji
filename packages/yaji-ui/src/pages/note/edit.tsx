import Editor from "../../components/Editor";

export default function NoteEditPage() {
  return (
    <div className="p-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="text-gray-600 text-xs font-thin self-center mb-4 dark:text-zinc-300">
        Jan Fri 1970 08:30
      </div>
      <Editor />
    </div>
  );
}