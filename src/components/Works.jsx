import React from 'react'
import quote from '../assets/quote.PNG';
import venta from '../assets/ventaPOS.png';
import tvs from '../assets/tvs.png';

const Work = () => {
  return (
    <div name='works' className='w-full md:h-screen bg-[#0a192f]'>
     <div className='max-w-[2000px] mx-auto p-7 flex flex-col justify-center w-full h-full pt-[100px]'>
     <div className='pl-10'>
              <p className='text-4xl font-bold inline border-b-4 border-[#76a2d8] text-gray-300'>My Works</p>
          </div>
    <div className="pl-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-8">
    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8] hover:scale-110 duration-500" href='https://github.com/MahmoudRabah19/travision-core' target='_blank' rel="noreferrer">
      <img className="w-auto px-5 pt-5 pb-10" src={tvs} alt="Travision"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#ccd6f6]">Travision</div>
        <p className="text-base text-[#8892b0]">
        TraViSion (Mobile and two Web apps) project in Flutter which strives to modernize the current paper-based violations system in West-bank, Palestine, using OCR technology, Twilio SMS API, and Firebase.  </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flutter</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Firebase</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mobile App</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web App</span>
      </div>
    </a>
   
    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8]  hover:scale-110 duration-500" href='https://github.com/MahmoudRabah19/VENTAPOS' target='_blank' rel="noreferrer">
      <img className="w-full" src={venta} alt="Venta POS"/>
      <div className="px-6 py-4">
        <div className="pt-5 font-bold text-xl mb-2 text-[#ccd6f6]">Venta POS</div>
        <p className="text-base text-[#8892b0]">
        A Point of Sale Program for a Clothing Store was built using PHP and MySQLi. In addition to using XAMPP to access the SQL server and build a local server for the program. </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQLi</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#XAMPP</span>
      </div>
    </a>

    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8]  hover:scale-110 duration-500" href='https://github.com/MahmoudRabah19/Quotes-Saver' target='_blank' rel="noreferrer">
      <img className="w-full" src={quote} alt='Quotes Saver'/>
      <div className="px-6 py-4">
        <div className="pt-4 font-bold text-xl mb-2 text-[#ccd6f6]">Quotes Saver</div>
        <p className="text-base text-[#8892b0]">
        A simple MERN stack application with Docker Deployed called Quotes Saver it allows the user to add, update and delete quotes</p>
      </div>
      <div className="px-6 pt-9 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MERN-Stack</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Docker</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
      </div>
    </a>
  </div>
  </div>
    </div>
  
  );
};

export default Work