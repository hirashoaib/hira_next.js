import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import { Post } from "../data/posts";

const PostHead: NextComponentType<NextPageContext, {}, Post> = (
  props: Post
) => {
  return (
    <Head>
      <title> {props.title} </title>
      <meta name="description" content={props.subtitle} />
      {/* open-graph meta*/}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.subtitle} />

      <meta property="og:image" content={props.image} />
      {/* twitter card meta*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.subtitle} />
      <meta name="twitter:image" content={props.image} />
    </Head>
  );
};
export default PostHead;