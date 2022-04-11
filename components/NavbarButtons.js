import Link from "next/link";

function NavbarButtons({ text, link }) {
  return (
    <div>
      <Link href={link}>
        <a className="text-opacity-60 text-black hover:text-opacity-100 transition-all duration-200">{text}</a>
      </Link>
    </div>
  );
}

export default NavbarButtons;
