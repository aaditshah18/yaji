import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export default function PageHeader (props: Props) {
  return (
    <div className="sticky top-0 flex justify-between items-center w-full bg-white p-6 select-none bg-opacity-60 backdrop-blur-md dark:text-zinc-200 dark:bg-zinc-950">
      {props?.children}
    </div>
  );
}