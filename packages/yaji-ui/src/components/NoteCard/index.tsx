import { Note } from "../../types/note";
import { useEffect, useRef, useState } from "react";
import { VerticalDots } from "../Icons";
import { Card } from "../Card";

type Props = {
  note?: Note
}

export default function NoteCard(props: Props) {
  const { note } = props;
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [showDetailButton, setShowDetailButton] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    if (!contentRef || !contentRef.current) {
      return;
    }

    setShowDetailButton(contentRef.current.scrollHeight > contentRef.current.offsetHeight);
  }, []);

  if (!note || Object.keys(note).length === 0) {
    return (
      <Card />
    );
  }

  const handleCollapseClick = () => {
    setShowFullContent(s => !s);
  };

  return (
    <Card className="max-w-2xl">
      <div className="flex justify-between mb-2">
        <div className="text-gray-600 text-sm font-thin self-center dark:text-zinc-300">
          {new Date(Number(note.creationDate)).toDateString()}
        </div>
        <VerticalDots />
      </div>
      <p
        ref={contentRef}
        className={`${showFullContent ? "" : "max-h-48 line-clamp-5"}`}
      >
        {note.content}
      </p>
      {showDetailButton ? (
        <button
          className="text-blue-500 text-sm mt-4 dark:text-blue-400"
          onClick={handleCollapseClick}
        >
          {showFullContent ? "Collapse" : "Show More"}
        </button>
      ) : null}
    </Card>
  );
}