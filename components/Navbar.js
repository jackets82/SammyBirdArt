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
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
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
