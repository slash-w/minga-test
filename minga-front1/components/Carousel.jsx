import React from 'react'

export default function Carousel() {
  return (
    <div className="h-[250px] w-full hidden pt-[7rem] mb-[6rem] md:block">
        <div className="w-full p-2 h-[200px] gap-5 justify-evenly items-center bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] rounded-lg text-white hidden md:flex">
        <img
            className="shadow-lg rotate-180 bg-white p-1 rounded-full"
            src="../public/goodies/arrow.svg"
          ></img>
          <img
            className="h-[220px] relative bottom-8"
            src="../public/images/someone.png"
          ></img>
          <img
            className="h-[220px] relative bottom-10"
            src="../public/images/manga1.png"
          ></img>
          <div className="flex flex-col w-[50%] gap-2">
            <h3 className="text-white text-2xl font-medium">
              Shonen
            </h3>
            <p className="text-xs">
              Is the manga that is aimed at adolescent boys. They are series
              with large amounts of action, in which humorous situations often
              occur. The camaraderie between members of a collective or a combat
              team stands out.
            </p>
          </div>

          <img
            className="shadow-lg bg-white p-1 rounded-full"
            src="../public/goodies/arrow.svg"
          ></img>
        </div>
      </div>
  )
}
