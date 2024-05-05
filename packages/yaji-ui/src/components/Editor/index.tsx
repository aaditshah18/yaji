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
        class: "h-screen focus:outline-none dark:text-zinc-200"
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

  return (
    <EditorContent editor={editor} />
  );
}