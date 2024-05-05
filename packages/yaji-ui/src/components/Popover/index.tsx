import { MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode
  content?: ReactNode
  trigger?: "hover" | "click"
}

export default function Popover({
  children,
  content,
  trigger = "click"
}: Props) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  const handleClickTrigger: MouseEventHandler<HTMLDivElement> = () => {
    setShow(s => !s);
  };

  const handleClickContent: MouseEventHandler<HTMLDivElement> = () => {
    setShow(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center"
    >
      <div
        className={trigger === "click" ? "cursor-pointer" : ""}
        onClick={handleClickTrigger}
      >
        {children}
      </div>
      <div
        hidden={!show}
        className="min-w-fit h-fit absolute top-5 right-2 z-50 transition-all"
      >
        <div
          className="rounded-lg bg-white shadow-lg border dark:border-zinc-700 dark:bg-zinc-800"
          onClick={handleClickContent}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
