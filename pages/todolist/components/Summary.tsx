import React from "react";
import { useRecoilValue } from "recoil";
import { todoListSummary } from "../state";
import cn from "classnames";
const Summary = () => {
  const summary = useRecoilValue(todoListSummary);
  return (
    <div className={cn("flex")}>
      progress: {summary.completed}/{summary.total} ({summary.percent})
    </div>
  );
};

export default Summary;
