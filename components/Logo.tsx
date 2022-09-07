import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  const img = "/images/logo.png";

  return (
    <Link href={"/"}>
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
