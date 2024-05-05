import { Link } from "react-router-dom";
import { Copy, Edit, Share } from "../Icons";
import { Menu } from "../Menu";
import { ReactNode } from "react";

type Props = {
  noteId: string;
}

const MENU_ITEMS: {
  value: string
  content: ReactNode
  onClick: () => void
}[] = [
  {
    value: "pin",
    content: "Pin",
    onClick: () => {
      console.log("pin");
    },
  },
  {
    value: "detail",
    content: "View Detail",
    onClick: () => {
      console.log("detail");
    },
  },
  {
    value: "delete",
    content: (
      <span className="text-red-600 dark:text-red-500">
        Delete
      </span>
    ),
    onClick: () => {
      console.log("delete");
    },
  }
];

export default function Settings (props: Props) {
  return (
    <>
      <div className="w-48 border-b py-4 px-5 flex justify-between dark:border-zinc-600">
        <Share className="cursor-pointer" />
        <Link to={`/note/edit/${props.noteId}`}>
          <Edit className="cursor-pointer" />
        </Link>
        <Copy className="cursor-pointer" />
      </div>
      <Menu>
        {MENU_ITEMS.map(m => (
          <Menu.Item
            key={m.value}
            onClick={m.onClick}
          >
            {m.content}
          </Menu.Item>
        ))}
      </Menu>
      <div className="text-xs p-4 flex flex-col space-y-2 text-gray-500 dark:text-zinc-400">
        <div>
          Word Count: 123412
        </div>
        <div>
          Updated: 2018-12-07 08:30
        </div>
      </div>
    </>
  );
}