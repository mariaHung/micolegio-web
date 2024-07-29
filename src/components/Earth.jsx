/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import EarthCartoon from './models/EarthCartoon'
import Loader from "./Loader"
import { card, rayos } from '../assets'

const Earth = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [icons, setIcons] = useState()

    const adjustEarthForScreenSize = () => {
        let screenScale = null; 
        let screenPosition = [0, -6.5, -53];
        let rotation = [100, 0, 0];

        if(window.innerWidth < 768) {
        screenScale = [24, 24, 24];
        } else {
        screenScale = [25, 25, 25];
        }
        return [screenScale, screenPosition, rotation];
    } 

    const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

    return (
        <div className='mt-[-25rem] lg:mt-[0rem] lg:-mx-[5rem] w-full h-screen'>
            <Canvas
                className={`bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                <directionalLight position={[0, 25, 0]} intensity={5} />
                <ambientLight intensity={1} />
                <hemisphereLight skyColor='#FFEA00' groundColor="#000000" intensity={2} />

                <EarthCartoon
                    position={earthPosition}
                    scale={earthScale}
                    rotation={earthRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    icons={icons}
                    setIcons={setIcons}
                />

                </Suspense>
            </Canvas>
            <div className='relative -z-10'>
                <img
                    src={rayos}
                    width={350}
                    className='
                    lg:-mt-[30rem] lg:mx-[20rem] lg:rotate-45
                    smd:-mt-[17rem] smd:mx-[12rem] 
                    md:-mt-[17rem] md:mx-[11rem] md:rotate-180
                    sm:-mt-[17em] sm:mx-[5rem] sm:rotate-180
                    xm:-mt-[17em] xm:-mx-[3rem] xm:rotate-180
                    xxs:-mt-[17em] xxs:-mx-[3rem] xxs:rotate-180
                    opacity-85'
                />
                <img
                    src={card}
                    width={100}
                    className='
                    lg:-mt-[21rem] lg:mx-[10rem] lg:-rotate-12
                    smd:-mt-[32rem] smd:mx-[36rem] smd:rotate-45 smd:w-[110px]
                    md:-mt-[35rem] md:mx-[37rem] md:-rotate-12
                    sm:-mt-[35rem] sm:mx-[32rem] sm:rotate-45
                    xm:-mt-[33rem] xm:mx-[2rem] xm:-rotate-12 xm:w-[100px]
                    xxs:-mt-[36rem] xxs:mx-[1rem] xxs:-rotate-12'
                />
            </div>
        </div>
    )
}

export default Earth