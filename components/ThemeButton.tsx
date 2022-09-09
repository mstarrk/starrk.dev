import { MainContext } from "../contexts/MainContextProvider";

export default function ThemeButton({ themeClass }: { themeClass: string }) {
  return (
    <MainContext.Consumer>
      {() => (
        <div>
          <button
            className="theme-button"
            onClick={() => {
              document
                .querySelector("body")
                ?.setAttribute("class", `theme ${themeClass}`);
            }}
          />
        </div>
      )}
    </MainContext.Consumer>
  );
}
