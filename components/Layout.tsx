import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto">
      <Head>
        <title>Sand Box</title>
      </Head>
      <div className=" p-4 flex justify-center items-center mt-4 relative">
        <Link href="/">
          <a className="text-2xl text-bold font-bold">
            <h1>Sand Box</h1>
          </a>
        </Link>
        <Link href={"/"}>
          <a className="w-16 h-10 absolute left-3">
            <Image
              src="/images/favicon.ico"
              layout="fill"
              objectFit="contain"
              alt="logo image"
            />
          </a>
        </Link>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Layout;
