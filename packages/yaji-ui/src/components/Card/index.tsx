import { ReactNode } from "react";

type Props = {
  children?: ReactNode
  className?: string;
}

export const Card = (props: Props) => {
  return (
    <div className={`flex items-center rounded-lg border border-zinc-100 shadow-lg dark:bg-zinc-900 dark:border-0 ${props.className ?? ""}`}>
      <div className="p-4 w-full break-words dark:text-zinc-200">
        {props.children}
      </div>
    </div>
  );
};