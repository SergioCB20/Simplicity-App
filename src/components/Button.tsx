import React from "react";

interface Props {
  text: string;
  onclick: () => void;
  type?:string
  className?:string;
}

const Button: React.FC<Props> = ({ text, onclick, type = "default", className }) => {
    return (
      <button
        type="button"
        className={`w-fit py-2 px-8 min-w-[200px] font-semibold rounded-xl
        hover:cursor-pointer ${type === "default" && "text-blue-950 bg-blue-400  dark:text-white dark:bg-blue-700 hover:bg-blue-600 hover:dark:bg-blue-800"}
          md:text-2xl md:min-w-[350px] ${type === "important" && "bg-purple-500 dark:bg-purple-600 hover:bg-purple-800 text-purple-100"} ${className}`}
        onClick={onclick}
      >
        {text}
      </button>
    );
  };

export default Button;
