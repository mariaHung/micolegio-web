import React from 'react'
import Earth from './Earth'
import { PlaceholdersAndVanishInput } from './design/Input'
import { Spotlight } from './design/Spotlight'
import { TextGenerateEffect } from './design/TextGenerateEffect'
import Button from './Button'

const Hero = () => {
  const placeholder = ["Buscar...", "Accede con tu codigo...", "..."]
  return (
    <div className='pt-[3rem] lg:grid grid-cols-2'>   
      {/* <ShootingStars />
      <StarsBackground /> */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="lg:text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col lg:items-center lg:justify-center">
          <p className="mb-5 mx-8 uppercase tracking-widest text-xs lg:text-center text-neutral-600 max-w-80">
            Trabajamos contigo y para ti.
          </p>
          <h1 className="mx-8 lg:text-center text-5xl md:text-4xl lg:text-5xl font-bold mb-6 text-n-8">
            Hemos <span className='text-n-8 transition-colors hover:text-color-1 cursor-pointer'>gestionado</span> la inscripción 
          </h1>
          <TextGenerateEffect
            words="a más de 600.000 alumnos en los últimos 10 años"
            className="mx-8 md:text-2xl lg:text-lg"
          />
          {/* <div className='mx-8 md:text-1xl lg:text-2xl'>
            a más de <span className='text-n-8 transition-colors hover:text-color-1 cursor-pointer'>
            600.000
            </span> alumnos en los últimos <span className='text-n-8 transition-colors hover:text-color-1 cursor-pointer'>
              10 años
            </span> 
          </div> */}
          <div className='w-[19rem] max-lg:w-full h-full px-5 bg-n-9 bg-opacity-40 lg:shadow-sm lg:shadow-black rounded-[2rem] lg:w-auto even:py-10'>
            <div className='lg:text-center md:mt-y-5 mb-2 text-lg font-medium text-white'>
              Ingrese su Código de Acceso Web
            </div>
            <PlaceholdersAndVanishInput
              placeholders={placeholder}
              onChange={(e) => e}
              onSubmit={(e) => e}
            /> 
            <a href='#code'>
              <p className="mt-5 uppercase underline tracking-widest text-xs lg:text-center text-neutral-100 ">
                Olvidaste tu codigo?
              </p>
            </a>
          </div>
        </div>
      </div> 
      <Earth />
      <div>
        {/* <Spotlight
          className="top-40 -left-10 md:-left-32 md:-top-20"
          fill="#FFFF3F"
        /> */}
        <Spotlight className="left-15 top-28 " fill="#FCF300" />
      </div>
    </div>
  )
}

export default Hero