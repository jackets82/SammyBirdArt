import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { React, useState, Fragment } from "react";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    alert("Menu Clicked");
  };

  return (
    <div className=" sticky top-0 bg-white z-50 shadow-lg">
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
        <div className="md:hidden pr-5 cursor-pointer">
          <Menu>
            <Menu.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </Menu.Button>

            <Menu.Items>
              <div className=" absolute -bottom-[185px] w-48 rounded bg-white p-3 z-50 flex flex-col right-1 gap-5 origin-top-right">
                <div className=" hover:bg-sammyBirdGray hover:-m-2 hover:p-2 duration-50 transition-all rounded">
                  <NavbarButtons text="HOME" link="/" />
                </div>
                <div className=" hover:bg-sammyBirdGray hover:-m-2 hover:p-2 duration-50 transition-all rounded">
                  <NavbarButtons text="ABOUT" link="/about" />
                </div>
                <div className=" hover:bg-sammyBirdGray hover:-m-2 hover:p-2 duration-50 transition-all rounded">
                  <NavbarButtons text="GALLERY" link="/gallery" />
                </div>
                <div className=" hover:bg-sammyBirdGray hover:-m-2 hover:p-2 duration-50 transition-all rounded">
                  <NavbarButtons text="CONTACT" link="/" />
                </div>
              </div>
            </Menu.Items>
          </Menu>
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
