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
        screenScale = [25, 25, 25];
        } else {
        screenScale = [26, 26, 26];
        }
        return [screenScale, screenPosition, rotation];
    } 

    const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

    return (
        <div className='mt-[-20rem] lg:mt-[-27rem] w-full h-screen relative'>
            <Canvas
                className={`bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                <directionalLight position={[0, 0, 0]} intensity={0} />
                <ambientLight intensity={0} />
                <hemisphereLight skyColor='#b1baff' groundColor="000000" intensity={1} />

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