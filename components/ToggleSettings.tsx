import NavbarButton from "./NavbarButton";
import { RiSettings5Fill } from "react-icons/ri";
import { MainContext } from "../contexts/MainContextProvider";

export default function ToggleSettings() {
  return (
    <MainContext.Consumer>
      {({ handleToggleSettings }) => (
        <NavbarButton
          icon={<RiSettings5Fill size={28} />}
          text={"Settings 🔧"}
          onClick={handleToggleSettings}
        />
      )}
    </MainContext.Consumer>
  );
}
