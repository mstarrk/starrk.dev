import Link from "next/link";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    // TODO: Styling ul and li (hover too)
    // TODO: Link and ToggleTheme goes to the right =>
    // TODO: Parent element for Link and ToggleTheme
    // TODO: Link and Toggletheme icons
    // TODO: Styling logo
    // ? [Logo] <=> [Navbar] <=> [ToggleTheme, Github]
    <div>
      <Logo />
      <ul id="navbar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/posts">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <Link href="https://github.com/mstarrk">Github</Link>
      <ToggleTheme />
    </div>
  );
}
