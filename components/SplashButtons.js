import Link from "next/link";

function SplashButtons({path, link, fill}) {
  return (
    <div>
        <Link href={link}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className={` fill-white opacity-80 hover:opacity-100  hover:cursor-pointer transition-all duration-200`}
      >
        <path d={path} />
      </svg>
        </Link>
      
    </div>
  );
}

export default SplashButtons;
