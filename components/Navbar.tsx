import { MainContext } from "../contexts/MainContextProvider";
import ToggleDarkMode from "./ToggleDarkMode";
import NavbarButton from "./NavbarButton";

import { SiPug } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import NavbarButtons from "./NavbarButtons";
import ToggleSettings from "./ToggleSettings";

export default function Navbar() {
  return (
    <MainContext.Consumer>
      {({ showSettings }) => (
        <div
          className={`navbar flex md:flex-col fixed items-center md:w-16 md:top-0 md:left-0 bottom-0 w-full h-16 md:h-screen shadow-2xl z-20
            ${showSettings ? "" : " hover:md:translate-x-0 md:-translate-x-3/4"}
            `}
        >
          <div className="logo">
            <NavbarButton icon={<SiPug size={28} />} />
          </div>

          <NavbarButtons />

          <div className="flex md:flex-col md:justify-end justify-between space-x-1">
            <ToggleDarkMode />
            <ToggleSettings />
            <NavbarButton
              icon={<FaGithub size={28} />}
              text={"Check my Github"}
              onClick={() => window.open("http://github.com/mstarrk", "_blank")}
            />
          </div>
        </div>
      )}
    </MainContext.Consumer>
  );
}
