import { MouseEventHandler, ReactNode } from "react";

export default function NavbarButton({
  icon,
  text,
  onClick,
}: {
  icon: ReactNode;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="navbar-icon group" onClick={onClick}>
      {icon}
      {text ? (
        <span className="navbar-tooltip group-hover:scale-100">{text}</span>
      ) : null}
    </button>
  );
}
