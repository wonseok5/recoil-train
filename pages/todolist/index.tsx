import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const TodoListPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="font-bold flex justify-center items-center">TODO LIST</h1>
      <ul>
        <li></li>
      </ul>
    </Layout>
  );
};

export default TodoListPage;
