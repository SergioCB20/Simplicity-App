import React from 'react'
import ScrollAnimationContainer from "../../components/ScrollAnimationContainer";
import GroupManagementImg from "../../assets/Group_management_2.jpg";
import AIBotImg from "../../assets/AI_BOT_2.jpg";
import TaskManagement from "../../assets/Task_Management.jpg";

type HeroSectionProps = {
    id: string;
    title: string;
    list: string[];
    image: string;
    imagePos?:string;
}

const HeroSection:React.FC<HeroSectionProps> = ({title,list,image,imagePos,id}) =>{
    return(
        <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center relative" id={id}>
        <div className={`w-full h-full lg:w-1/2 ${imagePos==="right" && "order-2"}`}>
          <ScrollAnimationContainer className="flex justify-center items-center">
            <img
              src={image}
              alt="Task Management"
              className="w-full h-full lg:w-3/4 lg:h-3/4"
            />
          </ScrollAnimationContainer>
        </div>
        <div className={`w-[80%] h-[80%] absolute bg-white opacity-80 ${imagePos==="right" && "order-1"} lg:w-1/2 lg:h-full lg:static lg:opacity-100 lg:bg-transparent`}>
          <ScrollAnimationContainer>
            <article className="flex flex-col justify-center items-center pt-10 lg:p-12">
              <h1 className="text-3xl mb-5 lg:mb-20 font-semibold text-center text-black dark:text-black lg:dark:text-white">
              {title}
              </h1>
              <ul className="list-disc text-sm lg:text-lg text-justify max-w-[70%] text-black dark:text-black lg:dark:text-white">
                {list.map((item,idx) =>(
                    <li key={idx}><p>{item}</p></li>
                ))}
              </ul>
            </article>
          </ScrollAnimationContainer>
        </div>
      </div>
    )
}

const Features = [
    {
        id:"taskManagementSection",
        title:"Task Management",
        list:[
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
        ],
        image: TaskManagement
    },
    {
        id:"GroupmanagementSection",
        title:"Group Management",
        list:[
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
        ],
        image: GroupManagementImg
    },
    {
        id:"AiBotSection",
        title:"AI bot",
        list:[
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.`,
        ],
        image:AIBotImg
    }
]

const Section2 = () => {
  return (
    <>
        {Features.map((feature,idx) =>(
            <HeroSection title={feature.title} list={feature.list} image={feature.image} imagePos={idx%2===1?"right":"left"} id={feature.id}/>
        ))}
    </>
  )
}

export default Section2
