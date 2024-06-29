import { ReactNode } from "react";

type MenuComponent = (props: {children: ReactNode}) => ReactNode;

interface MenuInterface extends MenuComponent {
  Item: typeof Item;
}

export const Menu: MenuInterface = (props: {
  children: ReactNode
}) => {
  return (
    <div className="py-3 flex flex-col border-b dark:border-zinc-600">
      {props.children}
    </div>
  );
};

export const Item = (props: {
  children: ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      className="py-2 px-4 cursor-pointer hover:bg-gray-100 hover:dark:bg-zinc-600"
      onClick={props?.onClick}
    >
      {props.children}
    </div>
  );
};

Menu.Item = Item;