import React, { ChangeEvent, ChangeEventHandler, useCallback } from "react";
import cn from "classnames";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListFilterState } from "../state";
const Filter = () => {
  const [selectedFilter, setSelectedFilter] =
    useRecoilState(todoListFilterState);
  const updateFilter: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      console.log(e.target.value);
      setSelectedFilter(e.target.value as any);
    },
    [setSelectedFilter]
  );
  return (
    <div className={cn("border-2 mt-2")}>
      <select value={selectedFilter} onChange={updateFilter}>
        <option value="SHOW_ALL">ALL</option>
        <option value="SHOW_COMPLETED">COMPLETED</option>
        <option value="SHOW_UNCOMPLETED">UNCOMPLETED</option>
      </select>
    </div>
  );
};

export default Filter;
