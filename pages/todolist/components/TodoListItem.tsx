import React, { FC } from "react";
import { Todo } from "../types";
import classnames from "classnames";

interface Props {
  todo: Todo;
  onClick: () => void;
}
const TodoListItem: FC<Props> = ({ todo, onClick }) => {
  return (
    <div
      className={classnames(
        "bg-yellow-200 flex justify-between p-4 m-2 border-2 border-yellow-600 rounded-md cursor-pointer",
        { "bg-green-200": todo.isCompleted }
      )}
      onClick={onClick}
    >
      <div>{todo.content}</div>
      <div className={classnames()}>
        {todo.isCompleted ? <span>done</span> : <span>not done</span>}
      </div>
    </div>
  );
};

export default TodoListItem;
