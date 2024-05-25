import React from 'react'

type CardProps = {
    displayNow: boolean;
    section: string;
}

const Card:React.FC<CardProps> = ({displayNow = false,section}) => {
  return (
    <div className={`w-[102%] h-[102%] bg-white border-2 border-black rounded-lg absolute z-50 dark:text-white
    dark:border-white dark:bg-slate-900 p-5 ${displayNow?"scale-up-bottom-right":"hidden"}`}>
      <h1 className='text-3xl'>{section}</h1>
      <p> New task</p>
    </div>
  )
}

export default Card
