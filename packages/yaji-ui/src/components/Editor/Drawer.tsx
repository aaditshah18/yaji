import Drawer from "react-modern-drawer";
import Editor from "./index.tsx";
import { AngleDown } from "../Icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export default function NoteEditDrawer(props: Props) {
  const { isOpen, onClose } = props;

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
      >
        <div
          className="ps-3 py-6 cursor-pointer"
          onClick={onClose}
        >
          <AngleDown className="text-gray-600 w-4 h-4 dark:text-zinc-300" />
        </div>
        <div className="p-3 pt-0">
          <div className="text-gray-800 text-xs font-thin self-center mb-4 dark:text-zinc-300">
            Jan Fri 1970 08:30
          </div>
          {isOpen && <Editor />}
        </div>
      </Drawer>
    </>
  );
}