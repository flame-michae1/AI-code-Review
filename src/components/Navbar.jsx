import React from 'react'
import { BrainCircuit} from 'lucide-react';

const Navbar = () => {
  // Return a JSX element
  return (
    <>
      <div className="nav flex items-center justify-between h-[90px] bg-zinc-900" style={{padding:"75px 600px"}}>
        <div className="logo flex items-center gap-[10px]">
          <BrainCircuit size={30} color='#9333ea'/>
          <span className="text-2xl font-bold text-white ml-2">Code Ninja</span>
        </div>
        <div className="icons flex items-center gap-[20px]">
        </div>
      </div>
    </>
  )
}

export default Navbar