import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> About </title>
      </Head>

      <div>
        <Link href="/">Home Page </Link>
      </div>
    </>
  );
};
export default AboutPage;
