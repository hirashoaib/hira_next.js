import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

const Navbar: NextComponentType<NextPageContext> = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/about"> About </Link>
        </li>
        <li>
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
