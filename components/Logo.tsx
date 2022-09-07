import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  const img = "/images/logo.png";

  return (
    <Link href={"/"}>
      <div>
        <Image
          id="logo"
          src={img}
          height={28}
          width={28}
          alt={"Website's Logo"}
        />
      </div>
    </Link>
  );
}
