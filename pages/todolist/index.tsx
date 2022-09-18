import { NextPage } from "next";
import React from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../components/Layout";
import AddTodoListBtn from "./components/AddTodoListBtn";
import TodoListItem from "./components/TodoListItem";
import { todoListState } from "./state";

const TodoListPage: NextPage = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <Layout>
      <div>
        <div className="border-2 flex justify-center items-center relative flex-col">
          <h1 className="font-bold flex justify-center items-center">
            TODO LIST
          </h1>
          <AddTodoListBtn />
        </div>
        <div className="border-2 border-black" onClick={(e) => {
          console.log(e.target)
        }}>
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TodoListPage;
