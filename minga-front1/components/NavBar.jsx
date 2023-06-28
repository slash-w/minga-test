import React, { useState } from "react";

export default function NavBar() {
    const [display, setDisplay] = useState(false)

    return (
        
        <nav className="flex justify-between items-center absolute w-full z-50 px-5 py-2 md:p-0 md:w-5/6">
            <img
            className="h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg"
            src="../goodies/Menu.png"

            onClick={() => {
                console.log('a')}}></img>

            <img className="p-1 h-20" src="../goodies/logo.png"></img>
        </nav>
    );
}