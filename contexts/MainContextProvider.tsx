import { createContext, useState } from "react";

type MainContextData = {
  showSettings: boolean;
  handleToggleSettings: () => void;
  theme: string;
  handleChangeTheme: (theme: string) => void;
};

export const MainContext = createContext({} as MainContextData);

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("theme-emerald");

  const [showSettings, setShowSettings] = useState(false);

  function handleToggleSettings() {
    setShowSettings(!showSettings);
  }

  function handleChangeTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <MainContext.Provider
      value={{
        handleToggleSettings,
        showSettings,
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
