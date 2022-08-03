import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Default </title>
      </Head>
      <div>
        <Link href="/"> Home</Link>
        <Widget pageName="about" />
      </div>
    </>
  );
};

export default AboutPage;
