import React from 'react'
import Image from 'next/image';
import neon from './neon.css'
const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-6xl sm:text-5xl lg:text-6xl text-center font-extrabold'>
                <div className="neon-text">{"TRON"} <br></br>{"REMAKE"}
                  </div>
                  </h1>
                <p className='text-[#b4b4b4] text-base sm:text-lg mb-6 lg:text-xl'><span className=''>{"TRON REMAKE"} </span>es un juego realizado por el equipo Team TBD en la técnica de programación del SENA grado 11 del colegio Carlos Vicente Rey.</p>
                <div>
                  <a href='https://team-tbd.itch.io/tron-remake'>
                  <button className='px-6 py-3 rounded-full mr-4 text-white bg-gradient-to-br from-teal-700 via-green-400 to-teal-900 hover:bg-slate-400 w-full sm:w-fit'>Descarga Ahora!</button>
                  </a>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-zinc-700 w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative'>
                  <Image
                src="/image/logo.png"
                alt="hello there"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={300}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection