import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  const img = "/images/logo.png";

  return (
    // TODO: Link not working
    // TODO: Change 'p' for a different el
    <Link href={"www.google.com"}>
      <span>
        <Image
          id="logo"
          src={img}
          height={20}
          width={20}
          alt={"Website's Logo"}
        />
        <p id="logo-title">starrk.dev</p>
      </span>
    </Link>
  );
}
