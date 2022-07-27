import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home Page </title>
      </Head>

      <div>
        <Link href="/about">About us</Link>
      </div>
    </>
  );
};
export default HomePage;
