import Link from "next/link";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";
import NavbarButton from "./NavbarButton";

import { BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaAtom, FaGithub, FaPoo } from "react-icons/fa";

export default function Navbar() {
  return (
    // TODO: Styling logo
    // TODO: Mobile menu

    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-800 bg-teal-300 shadow-lg">
      <Logo />
      <ul id="navbar">
        <li>
          <Link href="/">
            <NavbarButton
              icon={<FaFire size={28} />}
              text={"Home"}
              onClick={() => console.log("hey")}
            />
          </Link>
        </li>
        <li>
          <Link href="/works">
            <NavbarButton icon={<FaAtom size={28} />} text={"Works"} />
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <NavbarButton
              icon={<BsFillLightningFill size={28} />}
              text={"Blog"}
            />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <NavbarButton icon={<FaPoo size={28} />} text={"About"} />
          </Link>
        </li>
      </ul>
      <a
        href="https://github.com/mstarrk"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <NavbarButton icon={<FaGithub size={28} />} text={"Check my Github"} />
      </a>
      <ToggleTheme />
    </div>
  );
}
