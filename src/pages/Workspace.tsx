import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import Card from "../components/WorkSpace/Card";

type CardShadowProps = {
  section: string;
  index: number;
  currentCard:number;
};

const Sections = [
  "To do",
  "In Progress",
  "Done"
]

const CardShadow: React.FC<CardShadowProps> = ({ section,index,currentCard }) => {
  const [newTask,setNewTask] = useState(false);
  const [cardDisplay,setCardDisplay] = useState(false);
  return (
    <div className={`w-[20%] min-w-[270px] h-[450px] flex flex-col items-center gap-5 ${index !== currentCard && window.innerWidth <1024 && "hidden"}`}>
      <button type="button" className="dark:text-white border-2 border-black dark:border-white rounded-full w-[30px] h-[35px]"
      onClick={()=>{
        setNewTask(true);
        setTimeout(() => {
          setNewTask(false);
          setCardDisplay(true);
        }, 1000); // Trigger animation
        }}>
      <i className="fa-solid fa-plus"></i>
      </button>
      <div className="w-full h-full border-2 dark:border-gray-500 grid place-items-center text-gray-300 dark:text-white relative">
        <div className={`absolute w-[60px] h-[60px] border-2 border-black bg-white z-[10] ${newTask?"new-task-animation":"hidden"}`}></div>
        <div className="z-0">
          <h1 className="text-xl text-center">{section}</h1>
          <p>Add or Move new tasks here</p> 
        </div>
        <Card displayNow={cardDisplay} section={section}/> 
      </div>
    </div>
  );
};

export default function Workspace() {
  const { theme } = useAppContext();
  const [currentCard,setCurrentCard] = useState(0);
  return (
    <div
      className={`${
        theme ? "dark" : ""
      } w-full mt-[60px] overflow-hidden flex flex-col bg-white  dark:bg-black`}
    >
      <div className="w-full h-[calc(100vh-60px)] pt-[80px] flex flex-col">
        <div className="w-full h-full flex justify-around">
          {Sections.map((section,idx) =>(
              <CardShadow section={section} index={idx} currentCard={currentCard}/>
          ))}
        </div>
      </div>
      {Sections.length > 0 && (
        <>
          <button
            type="button"
            className={`absolute bottom-4 left-16 bg-red-200 rounded-lg py-2 px-4 md:text-4xl lg:hidden ${0 ===  currentCard && "bg-gray-400"}`}
            onClick={() => currentCard === 0?setCurrentCard(currentCard):setCurrentCard(currentCard - 1)}
          >
            anterior
          </button>
          <button
            type="button"
            className={`absolute bottom-4 right-16 bg-red-200 rounded-lg py-2 px-4 md:text-4xl lg:hidden ${Sections.length-1 ===  currentCard && "bg-gray-400"}`}
            onClick={() => Sections.length-1 ===  currentCard?setCurrentCard(currentCard):setCurrentCard(currentCard + 1)}
          >
            siguiente
          </button>
        </>
      )}
    </div>
  );
}
