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
        <title>Recoil</title>
      </Head>
      <div className="border-b-2 p-4 flex justify-center items-center mt-4 relative">
        <Link href="/">
          <a className="text-2xl text-bold font-bold">
            <h1>Recoil</h1>
          </a>
        </Link>
        <div className="w-16 h-10 absolute left-3">
          <Image
            src="/images/recoil_logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo image"
          />
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Layout;
