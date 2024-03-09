import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaPhoneSquareAlt } from "react-icons/fa";
import Logo from '../assets/HABUI.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: "100px" }}></img>
            </div>

            <ul className=' hidden md:flex'>
                <li>
                    <Link to="home" smooth="true" duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth="true" duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth="true" duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth="true" duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth="true" duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>  <Link onClick={handleClick} to="home" smooth="true" duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth="true" duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="skills" smooth="true" duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="work" smooth="true" duration={500}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth="true" duration={500}>
                    Contact
                </Link></li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul className='font-semibold'>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/jaybui79/" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/HaBui7" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#316FF6]'>
                        <a href="https://www.facebook.com/profile.php?id=100035943096161" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00a86b]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            +84 708417087 <FaPhoneSquareAlt size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
