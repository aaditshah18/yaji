import { MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode
  content?: ReactNode
  trigger?: "hover" | "click"
  open?: boolean
  onOpenChange?: (o: boolean) => void
}

export default function Popover(props: Props) {
  const {
    children,
    content,
    trigger = "click",
    open= false,
    onOpenChange,
  } = props;
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      if (onOpenChange) {
        onOpenChange(true);
      } else {
        setShow(true);
      }
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      if (onOpenChange) {
        onOpenChange(false);
      } else {
        setShow(false);
      }
    }
  };

  const handleClickTrigger: MouseEventHandler<HTMLDivElement> = () => {
    if (onOpenChange) {
      onOpenChange(true);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        if (onOpenChange) {
          onOpenChange(false);
        } else {
          setShow(false);
        }
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
        hidden={!show && !open}
        className="min-w-fit h-fit absolute top-5 right-2 z-50 transition-all"
      >
        <div className="rounded-lg bg-white shadow-lg border dark:border-zinc-700 dark:bg-zinc-800">
          {content}
        </div>
      </div>
    </div>
  );
}
