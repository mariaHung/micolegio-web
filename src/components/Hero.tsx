import React from 'react'
import Earth from './Earth'
import { Spotlight } from './design/Spotlight'
import Button from './Button'
import { PlaceholdersAndVanishInput } from './design/Input'
import ShootingStars from './design/ShootingStarts'
import { StarsBackground } from './design/StarsBackground'

const Hero = () => {
  const placeholder = ["Buscar...", "Accede con tu codigo...", "..."]
  return (
    <div className='pt-[5rem]'>   
      <ShootingStars />
      <StarsBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col lg:items-center lg:justify-center">
          <p className="mb-5 mx-8 uppercase tracking-widest text-xs lg:text-center text-neutral-300 max-w-80">
            Trabajamos contigo y para ti.
          </p>
          <h1 className="mx-8 lg:text-center text-5xl md:text-4xl lg:text-5xl font-bold mb-6 text-n-1">
            Hemos gestionado la inscripción 
          </h1>
          <div className='mx-8 md:text-1xl lg:text-2xl'>
            a más de <span className='text-n-1 transition-colors hover:text-color-1 cursor-pointer'>
            600.000
            </span> alumnos en los últimos <span className='text-n-1 transition-colors hover:text-color-1 cursor-pointer'>
              10 años
            </span> 
          </div>
          <div className='lg:mt-[5rem] w-[19rem] max-lg:w-full h-full px-6 bg-n-8 bg-opacity-40 lg:shadow-sm lg:shadow-black  rounded-[2rem] lg:w-auto even:py-10 '>
            <div className='lg:text-center mb-2 text-lg font-medium text-neutral-100'>
              Ingrese su Código de Acceso Web
            </div>
            <PlaceholdersAndVanishInput
              placeholders={placeholder}
              onChange={(e) => e}
              onSubmit={(e) => e}
            /> 
          </div>
        </div>
      </div> 
      <Earth />
    </div>
  )
}

export default Hero