import React from "react";
import { useAppContext } from "../context/appContext";
import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";

export const Home = () => {
  const { theme } = useAppContext();

  return (
    <div
      className={`${
        theme ? "dark" : ""
      } w-full mt-[60px] overflow-hidden flex flex-col bg-white  dark:bg-blue-900`}
    >
      <Section1 />
      <Section2/>
    </div>
  );
};
