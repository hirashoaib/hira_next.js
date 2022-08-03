import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import { useState } from "react";

interface Props {
    pageName: string
}

const Widget: NextComponentType<NextPageContext,{}, Props> = (props: Props ) => {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <>
        <Head>
          <title> {props.pageName} </title>
        </Head>
      </>
    );
  }

  return(
   <>
     <button onClick={() =>setActive(true)}> Update Page Title </button>
   </>
  )
};

export default Widget;
