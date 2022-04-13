import Link from "next/link";
import React from "react";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  return (
    <div className=" sticky top-0 bg-white ">
      <div className=" max-w-5xl mx-auto flex justify-between h-40 items-center sticky top-0 z-50 bg-white pr-5 lg:pr-0">
        <div>
          <Link href="/">
            <img
              src="navbarIcon.jpeg"
              alt=""
              className="h-40 hover:cursor-pointer"
            />
          </Link>
        </div>
        <div className=" md:flex gap-5 text-sm tracking-wider hidden">
          <NavbarButtons text="HOME" link="/" />
          <NavbarButtons text="ABOUT" link="/about" />
          <NavbarButtons text="GALLERY" link="/gallery" />
          <NavbarButtons text="CONTACT" link="/" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
