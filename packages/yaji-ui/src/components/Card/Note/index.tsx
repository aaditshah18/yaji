import { Note } from "../../../types/note";
import { useEffect, useRef, useState } from "react";
import { VerticalDots } from "../../Icons";
import { Card } from "../index.tsx";
import Popover from "../../Popover";
import NoteSettings from "./Settings.tsx";
import NoteEditDrawer from "../../Editor/Drawer.tsx";

type Props = {
  note?: Note
}

export default function NoteCard(props: Props) {
  const { note } = props;
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [showDetailButton, setShowDetailButton] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [isOpenEditDrawer, setIsOpenEditDrawer] = useState(false);
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

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

  const toggleEditDrawer = () => {
    setIsOpenEditDrawer((prevState) => !prevState);
  };

  const handleCollapseClick = () => {
    setShowFullContent(s => !s);
  };

  const handleEditClick = () => {
    toggleEditDrawer();
    setIsPopoverOpened(false);
  };

  const handlePopoverOpenChange = (o: boolean) => {
    setIsPopoverOpened(o);
  };

  return (
    <>
      <Card className="max-w-xl">
        <div className="flex justify-between mb-2">
          <div className="text-gray-600 text-sm font-thin self-center dark:text-zinc-300">
            {new Date(Number(note.creationDate)).toDateString()}
          </div>
          <Popover
            open={isPopoverOpened}
            content={
              <NoteSettings
                noteId={note._id}
                onClickEdit={handleEditClick}
              />
            }
            onOpenChange={handlePopoverOpenChange}
          >
            <VerticalDots className="select-none" />
          </Popover>
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
            {showFullContent ? "Show Less" : "Show More"}
          </button>
        ) : null}
      </Card>
      <NoteEditDrawer
        isOpen={isOpenEditDrawer}
        onClose={toggleEditDrawer}
      />
    </>
  );
}