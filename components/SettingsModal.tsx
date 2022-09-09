import { MainContext } from "../contexts/MainContextProvider";
import Themes from "./Themes";

export default function SettingsModal() {
  return (
    <MainContext.Consumer>
      {({ showSettings }) => {
        if (showSettings) {
          return (
            <div className="settings-modal flex flex-col">
              <button className="bg-black w-6 h-6 hover:bg-white hover:text-dark rounded self-end text-white">
                ❌
              </button>
              <Themes />
            </div>
          );
        }
      }}
    </MainContext.Consumer>
  );
}
