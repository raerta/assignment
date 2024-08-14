import React, { HTMLProps } from "react";
import Link from "next/link";

interface ILinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({
  href,
  children,
  className,
}: ILinkProps & HTMLProps<HTMLAnchorElement>) => {
  return (
    <Link
      href={href}
      passHref={true}
      className={
        "bg-white px-4 w-full rounded-l-xl py-4 font-semibold hover:text-indigo-600"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
