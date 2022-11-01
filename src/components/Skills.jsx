import React from 'react'
import HTML from '../assets/html.png';
import Flutter from '../assets/flutter.png';
import JavaScript from '../assets/js.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/nodejs.png';
import Java from '../assets/java.png';
import Ruby from '../assets/Ruby.png';
import aws from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#76a2d8] text-gray-300'>Technical Skills</p>
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#FF4B00] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#76a2d8]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Flutter} alt="Flutter icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>Flutter</p>
              </div>
              <div className='shadow-md shadow-[#FFDF00]  hover:scale-110 duration-500 place-content-center'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#0097A7]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="ReactJs icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#6DA75D]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="Node JS icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#ad688e]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Ruby} alt="Ruby icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>Ruby</p>
              </div>
              
              <div className='shadow-md shadow-[#A5A9C4]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={aws} alt="AWS icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#DB380E]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                  <p className='my-4 text-gray-300 text-center font-mono'>Java</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills

