/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import EarthCartoon from './models/EarthCartoon'
import Loader from "./Loader"

const Earth = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    
    const adjustEarthForScreenSize = () => {
        let screenScale = null; 
        let screenPosition = [0, -6.5, -53];
        let rotation = [100, 0, 0];

        if(window.innerWidth < 768) {
        screenScale = [26, 26, 26];
        } else {
        screenScale = [25, 25, 25];
        }
        return [screenScale, screenPosition, rotation];
    } 

    const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

    return (
        <div className='mt-[-25rem] lg:mt-[0rem] w-full h-screen relative'>
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
                />

                </Suspense>

            </Canvas>
        </div>
    )
}

export default Earth