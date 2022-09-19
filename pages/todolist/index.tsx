import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import CommonModal from "../../components/CommonModal";
import Layout from "../../components/Layout";
import AddTodoListBtn from "./components/AddTodoListBtn";
import EditTodoModal from "./components/EditTodoModal";
import TodoListItem from "./components/TodoListItem";
import { filteredTodoListState, todoListState } from "./state";
import { Todo } from "./types";
import cn from "classnames";
import Filter from "./components/Filter";
import Summary from "./components/Summary";
const TodoListPage: NextPage = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const onClickBackdrop = useCallback(() => {
    setSelectedTodo(null);
  }, []);
  const onClickTodo = useCallback(
    (todo: Todo) => () => {
      setSelectedTodo(todo);
    },
    []
  );
  return (
    <Layout>
      <div>
        <div className="border-2 flex justify-center items-center relative flex-col">
          <h1 className="font-bold flex justify-center items-center">
            TODO LIST
          </h1>
          <AddTodoListBtn />
        </div>
        <div
          className={cn("relative")}
          onClick={(e: any) => {
            console.log(e.target.dataset);
          }}
        >
          <Summary />
          <Filter />
          {todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onClick={onClickTodo(todo)}
            />
          ))}
        </div>
      </div>
      <CommonModal isOpen={!!selectedTodo} onClickBackdrop={onClickBackdrop}>
        {selectedTodo && (
          <EditTodoModal onEndEdit={onClickBackdrop} todo={selectedTodo} />
        )}
      </CommonModal>
    </Layout>
  );
};

export default TodoListPage;
