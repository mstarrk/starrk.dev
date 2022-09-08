import NavbarButton from "./NavbarButton";
import { BsSunFill, BsSunglasses } from "react-icons/bs";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <NavbarButton
      icon={
        resolvedTheme === "dark" ? (
          <BsSunFill size={28} />
        ) : (
          <BsSunglasses size={28} />
        )
      }
      text={resolvedTheme === "dark" ? "Light? 🌇" : "Dark? 🌆"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    />
  );
}
