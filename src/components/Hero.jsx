import React, { useCallback, useEffect, useState } from 'react'
import Earth from './Earth'
import { Spotlight } from './design/Spotlight'
import { TextGenerateEffect } from './design/TextGenerateEffect'

const entryTitles = [
  "Hemos gestionado la inscripción",
  "Cuidamos tu información",
  "Mejoramos nuestros procesos"
];
const entryParagraphs = [
  "a mas de alumnos 600.000 en los últimos 10 años",
  "por que es nuestro valor más preciado",
  "con constancia para darte mayor satisfacción"
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [formCode, setFormCode] = useState("");//76519771111 38281049027

  const shuffleTitlesandParagraphs = useCallback(() => {
    const newIndex = (index + 1) % entryTitles.length;
    setIndex(newIndex);
  }, [index]);

  useEffect(() => {
    const intervalId = setInterval(shuffleTitlesandParagraphs, 30000);
    return () => clearInterval(intervalId);
  }, [shuffleTitlesandParagraphs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Code send!")
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const { code, value } = target;
    setFormCode({
      ...formCode,
      [code]: value
    })
    const url = `?ad=${value}`
    setFormCode(url)
  }

  return (
    <div className='pt-[3rem] lg:grid grid-cols-2 relative z-10'>   
      {/* <ShootingStars />
      <StarsBackground /> */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="lg:text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col lg:items-center lg:justify-center">
          <p className="mb-5 mx-8 uppercase tracking-widest text-xs lg:text-center text-neutral-600 max-w-80">
            Trabajamos contigo y para ti.
          </p>
          <h1 className="mx-8 lg:text-center text-5xl md:text-4xl lg:text-5xl font-bold mb-6 text-n-8">
            {entryTitles[index]}
          </h1>
          <TextGenerateEffect
            words={entryParagraphs[index]}
            className="mx-8 mb-5 md:text-2xl lg:text-lg cursor-pointer"
          />
          <div className='w-[19rem] max-lg:w-full h-full px-5 bg-n-9 bg-opacity-40 lg:shadow-sm lg:shadow-black rounded-[2rem] lg:w-auto even:py-10'>
            <div className='lg:text-center mb-5 md:mx-8 text-lg font-medium text-white'>
              Ingrese su Código de Acceso Web
            </div>
            <div className='group relative'>
              <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fill="evenodd" clip="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
              <input
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm bg-white"
                type="text"
                placeholder="Accede aqui!"
                id='code'
                name="code"
                onChange={handleInputChange}
              >
              </input>
            </div>
            <div className='mt-3 justify-center'>
              <div className='flex w-full'>
                <a className='flex w-full px-1' href={`https://www.micolegio.com/documentos.php${formCode}`} target="_blank">
                  <button
                    onSubmit={handleSubmit}
                    type="button"
                    className="flex w-full justify-center rounded-md bg-n-6 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar
                  </button>
                </a>
              </div>
              <div className='flex w-full px-1'>
                <a href="http://www.micolegio.com/recove_codigo.php" target="_blank">
                  <button
                    type='button'
                    className="flex w-full justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-n-1 hover:text-n-6"
                  >
                    Olvidaste tu codigo?
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Earth />
      <div>
        <Spotlight className="left-15 top-28 " fill="#FCF300" />
      </div>
    </div>
  )
}

export default Hero