import React from 'react'
import { SiDjango } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap itemso-center justify-center gap-4'>
        <div className='p-4'>
          <SiDjango className='text-7xl text-cyan-400' />
        </div>
        <div className='p-4'>
          <RiFlutterFill className='text-7xl'/>
        </div>
        <div className='p-4'>
          <FaPython className='text-7xl text-cyan-500' />
        </div>
        <div className='p-4'>
          <BiLogoPostgresql className="text-7xl text-red-700" />
        </div>
      </div>
    </div>
  )
}

export default Technologies