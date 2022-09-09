import ThemeButton from "./ThemeButton";

export default function Themes() {
  const themesData = [
    { id: 0, name: "Emerald", class: "theme-emerald" },
    { id: 1, name: "Diorama", class: "theme-diorama" },
  ];

  return (
    <ul className="flex justify-center w-full h-full items-center flex-wrap overflow-y-scroll gap-2 scroll-smooth">
      {themesData.map((theme) => (
        <li key={theme.id}>
          <ThemeButton themeClass={theme.class} />
        </li>
      ))}
    </ul>
  );
}
