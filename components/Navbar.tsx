import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/posts">Blog</Link>
      <Link href="/about">About</Link>
    </ul>
  );
}
