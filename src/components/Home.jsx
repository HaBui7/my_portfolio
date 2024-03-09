import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#EC297B]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ha Bui</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Front-end Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a front-end developer specializing in crafting engaging and intuitive user experiences.
                    With a keen eye for design and a passion for coding,
                    I am dedicated to bringing to life the visual and interactive elements of websites and web applications.
                </p>
                <div>
                    <Link to="work" smooth="true" duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ec297b] hover:border-[#ec297b]'>
                            View My Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home