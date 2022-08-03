import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Default </title>
      </Head>
      <div>
       <Link href='/about'> About</Link>
        <Widget pageName='home'/>
      </div>
    </>
  );
};

export default HomePage