import React from 'react'
import ScrollAnimationContainer from "../../components/ScrollAnimationContainer";
import GroupManagementImg from "../../assets/Group_management_2.jpg";
import AIBotImg from "../../assets/AI_BOT_2.jpg";
import TaskManagement from "../../assets/Task_Management.jpg";
const Section2 = () => {
  return (
    <>
    <div className="w-full h-[calc(100vh-60px)] flex" id="taskManagementSection">
        <div className="w-1/2 h-full">
          <ScrollAnimationContainer className="flex justify-center items-center">
            <img
              src={TaskManagement}
              alt="Task Management"
              className="w-3/4 h-3/4"
            />
          </ScrollAnimationContainer>
        </div>
        <div className="w-1/2 h-full">
          <ScrollAnimationContainer>
            <article className="flex flex-col justify-center items-center p-12">
              <h1 className="text-3xl mb-20 font-semibold text-center text-black dark:text-white">
                Task Management
              </h1>
              <ul className="list-disc text-lg text-justify text-black dark:text-white max-w-[70%]">
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
              </ul>
            </article>
          </ScrollAnimationContainer>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-60px)] flex" id="GroupmanagementSection">
        <div className="w-1/2 h-full">
        <ScrollAnimationContainer>
            <article className="flex flex-col justify-center items-center p-12">
              <h1 className="text-3xl mb-20 font-semibold text-center text-black dark:text-white">
                Group Management
              </h1>
              <ul className="list-disc text-lg text-justify text-black dark:text-white max-w-[70%]">
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
              </ul>
            </article>
          </ScrollAnimationContainer>
        </div>
        <div className="w-1/2 h-full">
          <ScrollAnimationContainer className="flex justify-center items-center">
            <img
              src={GroupManagementImg}
              alt="Group Management"
              className="w-3/4 h-3/4"
            />
          </ScrollAnimationContainer>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-60px)] flex" id="AiBotSection">
        <div className="w-1/2 h-full">
          <ScrollAnimationContainer className="flex justify-center items-center">
            <img src={AIBotImg} alt="AI bot" className="w-3/4 h-3/4" />
          </ScrollAnimationContainer>
        </div>
        <div className="w-1/2 h-full">
        <ScrollAnimationContainer>
            <article className="flex flex-col justify-center items-center p-12">
              <h1 className="text-3xl mb-20 font-semibold text-center text-black dark:text-white">
                AI in the House
              </h1>
              <ul className="list-disc text-lg text-justify text-black dark:text-white max-w-[70%]">
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
              </ul>
            </article>
          </ScrollAnimationContainer>
        </div>
      </div>
    </>
  )
}

export default Section2
