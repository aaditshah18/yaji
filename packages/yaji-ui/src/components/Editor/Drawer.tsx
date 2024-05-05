import Drawer from "react-modern-drawer";
import Editor from "./index.tsx";
import { AngleDown } from "../Icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export default function NoteEditDrawer(props: Props) {
  const { isOpen, onClose } = props;

  const handleSave = () => {
    onClose();
  };

  return (
    <>
      <Drawer
        className="!bg-zinc-100 rounded-t-xl dark:!bg-zinc-900"
        open={isOpen}
        onClose={onClose}
        direction="bottom"
        duration={400}
        overlayOpacity={0.6}
        size={"90%"}
        lockBackgroundScroll
      >
        <div className="h-full flex flex-col overflow-scroll">
          <div
            className="sticky top-0 ps-3 py-6 cursor-pointer z-10 !bg-zinc-100 dark:!bg-zinc-900"
            onClick={onClose}
          >
            <AngleDown className="text-gray-600 w-4 h-4 dark:text-zinc-300" />
          </div>
          <div className="flex-grow p-3 pt-0">
            {isOpen && <Editor />}
          </div>
        </div>
        <button
          className="absolute bottom-10 right-10 text-sm rounded-xl p-3 shadow-2xl bg-white dark:text-zinc-200 dark:bg-zinc-700"
          onClick={handleSave}
        >
          Save
        </button>
      </Drawer>
    </>
  );
}