import { render } from '@react-three/fiber';
import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            {/* <img src={arrow} className='w-4 h-4 object-contain' /> */}
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hola! somos centro servec <span className='font-semibold'>Rebeca</span>👋
            <br />
            Trabajamos contigo para una mejor educacion.
        </h1>
    ),
    2: (
        <InfoBox
            text="I like to experiment with a lot of technologies and learn new things all the time."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curies about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I've just a few keystrokes away."
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo