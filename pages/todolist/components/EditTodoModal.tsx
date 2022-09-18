import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { Todo } from "../types";
import cn from "classnames";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state";

interface Props {
  todo: Todo;
  onEndEdit: () => void;
}
const EditTodoModal: FC<Props> = ({ todo, onEndEdit }) => {
  const setTodoListState = useSetRecoilState(todoListState);
  const [inputContent, setInputContent] = useState(todo.content);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const onChangeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  }, []);
  const onChangeCheck = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked);
  }, []);
  const onEdit = useCallback(() => {
    setInputContent("");
    setTodoListState((prev) => {
      const targetTodoIdx = prev.findIndex((td) => td.id === todo.id);
      if (targetTodoIdx < 0) {
        return [];
      }
      const nextTodoList: Todo[] = [
        ...prev.slice(0, targetTodoIdx),
        { ...prev[targetTodoIdx], content: inputContent, isCompleted },
        ...prev.slice(targetTodoIdx + 1),
      ];
      return nextTodoList;
    });
    onEndEdit();
  }, [inputContent, isCompleted, onEndEdit, setTodoListState, todo.id]);

  return (
    <div
      className={cn(
        "border-2 flex flex-col justify-center items-center rounded-md p-6"
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2 className={cn("font-bold text-white m-2")}>Edit Todo</h2>
      <label className={cn("m-2")}>
        Content:
        <input
          className={cn("ml-3")}
          type="text"
          value={inputContent}
          onChange={onChangeContent}
        />
      </label>
      <label>
        isCompleted:
        <input
          className={cn("ml-3")}
          type="checkbox"
          checked={isCompleted}
          onChange={onChangeCheck}
        />
      </label>
      <button
        className={cn(
          "bg-blue-700 py-2 px-4 rounded-full font-bold text-white mt-2 hover:bg-blue-900"
        )}
        onClick={onEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default EditTodoModal;
