import Link from "next/link";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    <ul id="navbar">
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/posts">Blog</Link>
      <Link href="/about">About</Link>
      <ToggleTheme />
    </ul>
  );
}
