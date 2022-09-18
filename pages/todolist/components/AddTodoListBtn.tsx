import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state";

interface Props {}

const AddTodoListBtn: FC<Props> = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const [contentInput, setContentInput] = useState("");
  const onChangeContentInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setContentInput(e.target.value);
    },
    []
  );
  const onAddTodo = useCallback(() => {
    setTodoList((prev) => [
      ...prev,
      { id: new Date().getTime(), content: contentInput, isCompleted: false },
    ]);
  }, [contentInput, setTodoList]);

  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex p-2 ">
        <label>
          content:
          <input
            value={contentInput}
            onChange={onChangeContentInput}
            className="ml-2 rounded-full p-2 bg-slate-300 focus:bg-slate-400"
            type="text"
          />
        </label>
      </div>
      <button
        onClick={onAddTodo}
        className="bg-blue-300 right-0 p-2 rounded-full hover:bg-red-200 "
      >
        add+
      </button>
    </div>
  );
};

export default AddTodoListBtn;
