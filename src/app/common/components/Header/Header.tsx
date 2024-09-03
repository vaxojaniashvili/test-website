import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center w-full gap-5 bg-green-300 py-3">
        <div>
          <Link href={"/pages/Main"}>
            <p className="hover:text-red-500">Home</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={"/pages/Movie"}>
            <p className="hover:text-red-500">Movie</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={"/pages/About"}>
            <p className="hover:text-red-500">About</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
