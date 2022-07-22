import Link from "next/link";
import type { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PrivateComponent: NextComponentType<NextPageContext> = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn]);

  return (
    <div>
      This is private component.
      <br />
      <br />
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
};
export default PrivateComponent;
