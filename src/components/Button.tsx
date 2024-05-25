import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  onclick: () => void;
  type?: string;
  className?: string;
  rol?: string;
  to?: string;
}

const Button: React.FC<Props> = ({ text, onclick, type = "default", className, rol = "button", to }) => {
  const baseClasses = `w-fit py-2 px-8 min-w-[200px] font-semibold rounded-xl
    hover:cursor-pointer ${type === "default" && "text-blue-950 bg-blue-400  dark:text-white dark:bg-blue-700 hover:bg-blue-600 hover:dark:bg-blue-800"}
    md:text-2xl md:min-w-[350px] ${type === "important" && "bg-purple-500 dark:bg-purple-600 hover:bg-purple-800 text-purple-100"} ${className}`;

  if (rol === "Link" && to) {
    return (
      <Link to={to} className={baseClasses} onClick={onclick}>
        <span className="ps-4 md:ps-[60px]">
          {text}
        </span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;

