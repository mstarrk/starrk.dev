import { MouseEventHandler, ReactNode } from "react";

export default function NavbarButton({
  icon,
  isCurrentRoute,
  text,
  onClick,
}: {
  icon: ReactNode;
  isCurrentRoute?: boolean;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={
        "navbar-button group" + (isCurrentRoute ? " current-route" : "")
      }
      onClick={onClick}
    >
      {icon}
      {text ? (
        <span className="navbar-button-tooltip md:group-hover:scale-100">
          {text}
        </span>
      ) : null}
    </button>
  );
}
