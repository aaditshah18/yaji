import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export default function Editor() {
  const extensions = [
    StarterKit,
  ];
  const content = "<p>Hello World!</p>";
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "focus:outline-none dark:text-zinc-200"
      }
    }
  });

  useEffect(() => {
    if (editor) {
      editor.commands.focus("end");
    }

  }, [editor]);

  if (!editor) {
    return null;
  }

  const handleFocusEditor = () => {
    if (editor) {
      editor.commands.focus("end");
    }
  };

  return (
    <div
      className="h-full"
      onClick={handleFocusEditor}
    >
      <div className="text-gray-800 text-xs font-thin mb-2 dark:text-zinc-300">
        Jan Fri 1970 08:30
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}