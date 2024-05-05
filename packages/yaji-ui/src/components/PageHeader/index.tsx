import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export default function PageHeader (props: Props) {
  return (
    <div className="sticky top-0 flex justify-between items-center w-full bg-white p-6 border-b border-zinc-400 select-none dark:text-zinc-200 dark:bg-zinc-950 dark:border-zinc-600">
      {props?.children}
    </div>
  );
}