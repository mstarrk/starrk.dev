import { useRouter } from "next/router";
import Link from "next/link";
import NavbarButton from "./NavbarButton";
import { GiMushroomHouse, GiCoffeeCup, GiNotebook } from "react-icons/gi";
import { RiChatHeartFill } from "react-icons/ri";

// Returns an UL with all buttons that belongs to a route.
export default function NavbarButtons() {
  const router = useRouter();
  const route = router.pathname;

  // Icon size
  const size = 28;

  const buttonsData = [
    { id: 0, icon: GiMushroomHouse, route: "/", text: "Home" },
    { id: 1, icon: GiCoffeeCup, route: "/works", text: "Works" },
    { id: 2, icon: GiNotebook, route: "/posts", text: "Blog" },
    { id: 3, icon: RiChatHeartFill, route: "/about", text: "About" },
  ];

  return (
    <ul className="nav-buttons">
      {buttonsData.map((btn) => (
        <li key={btn.id}>
          <Link href={btn.route} passHref>
            <a>
              <NavbarButton
                icon={<btn.icon size={size} />}
                text={btn.text}
                isCurrentRoute={route === btn.route}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
