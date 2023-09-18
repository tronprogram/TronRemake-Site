import React from 'react'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-6xl font-extrabold'>TRON REMAKE</h1>
                <p className='text-[#b4b4b4] text-lg lg:text-xl'>TRON REMAKE es un juego realizado por el equipo Team TBD en la técnica de programación del SENA grado 11 del colegio Carlos Vicente Rey.</p>
            </div>
            <div className='col-span-5'>
                <Image
                src="/image/logo.svg"
                alt="hello there"
                width={256}
                height={256}
                />
            </div>
        </div>
    </section>
  )
}

export default HeroSection