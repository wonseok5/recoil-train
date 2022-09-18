import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
} from "react";
import cn from "classnames";
interface Props {
  isOpen: boolean;
  onClickBackdrop: () => void;
  children: ReactNode | ReactNode[];
}
const CommonModal: FC<Props> = ({ isOpen, onClickBackdrop, children }) => {
  return (
    <div
      className={cn(
        "fixed",
        "top-0",
        "left-0",
        "bottom-0",
        "right-0",
        "z-1",
        "bg-black/[0.5]",
        "flex",
        "justify-center",
        "items-center",
        {
          hidden: !isOpen,
        }
      )}
      onClick={onClickBackdrop}
    >
      <div className={"bg-slate-500 w-screen mx-10 "}>{children}</div>
    </div>
  );
};

export default CommonModal;
