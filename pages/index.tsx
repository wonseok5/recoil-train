import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <Link href={"/todolist"}>
              <a className="font-bold text-blue-400 text-lg "> - TODO LIST</a>
            </Link>
          </li>
          <li>
            <Link href={"/user-management"}>
              <a className="font-bold text-blue-400 text-lg ">
                {" "}
                - USER MANAGEMENT
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
