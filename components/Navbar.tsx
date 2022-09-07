import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import NavbarButton from "./NavbarButton";

import { SiPug } from "react-icons/si";
import { BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaAtom, FaGithub, FaPoo } from "react-icons/fa";

import { useState } from "react";

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  const expandNavbar = () => {
    setExpand(!expand);
  };

  return (
    // TODO: Mobile menu

    <div
      className={
        (expand ? "w-64  " : "w-16 ") +
        "fixed top-0 left-0 h-screen m-0 flex flex-col dark:bg-gray-800 bg-teal-300 shadow-2xl z-20"
      }
    >
      <div>
        <NavbarButton icon={<SiPug size={28} />} onClick={expandNavbar} />
      </div>
      <ul
        id="navbar"
        className={
          (expand ? "justify-right align-right " : "justify-center ") +
          "flex-grow flex flex-col"
        }
      >
        <li>
          <Link href="/" passHref>
            <a>
              <NavbarButton icon={<FaFire size={28} />} text={"Home"} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/works" passHref>
            <a>
              <NavbarButton icon={<FaAtom size={28} />} text={"Works"} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts" passHref>
            <a>
              <NavbarButton
                icon={<BsFillLightningFill size={28} />}
                text={"Blog"}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>
              <NavbarButton icon={<FaPoo size={28} />} text={"About"} />
            </a>
          </Link>
        </li>
      </ul>
      <div className="flex flex-col justify-end">
        <NavbarButton
          icon={<FaGithub size={28} />}
          text={"Check my Github"}
          onClick={() => window.open("http://github.com/mstarrk", "_blank")}
        />

        <ToggleTheme />
      </div>
    </div>
  );
}
