import type { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";

const Name: NextComponentType<NextPageContext> = () => {
  const { query } = useRouter();
  return <h1>Hello {query.name}</h1>;
};

export default Name;
