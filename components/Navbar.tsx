import ToggleTheme from "./ToggleTheme";
import NavbarButton from "./NavbarButton";

import { SiPug } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import NavbarButtons from "./NavbarButtons";

export default function Navbar() {
  return (
    <div
      className={
        "flex md:flex-col fixed items-center md:w-16 md:top-0 md:left-0 bottom-0 w-full h-16 md:h-screen shadow-2xl z-20 navbar"
      }
    >
      <div className="logo">
        <NavbarButton icon={<SiPug size={28} />} />
      </div>

      <NavbarButtons />

      <div className="flex md:flex-col md:justify-end justify-between space-x-1">
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
