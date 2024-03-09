import React from 'react';
import WorkImg from '../assets/HABUI.png';

const projects = [
    { name: 'LZ - Ecommerce website', image: WorkImg, githubLink: ['https://github.com/KN2222/COSC2769_Full_Stack_Development', 'https://github.com/devadaviddd/LZ-BACKEND'] },
    { name: 'Reservio - Making reservations website', image: WorkImg, githubLink: ['https://github.com/klenathan/reservio'] },
    { name: 'MATHLAB Application', image: WorkImg, githubLink: ['https://github.com/phamvodong/DigitalFundamental'] },
    { name: 'DSA-related Project', image: WorkImg, githubLink: ['https://github.com/KhoiNguyen-281/DSA_FIND_SECRETKEY'] },
    { name: 'Store Management System', image: WorkImg, githubLink: ['https://github.com/klenathan/thtdstoremanagement'] },
    { name: 'Simplified Lazada Replicating', image: WorkImg, githubLink: ['https://github.com/klenathan/COSC2430-lazada-web'] },

    // Add more projects as needed
];

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#EC297B]'>Work</p>
                    <p className='py-6'>My Recent Work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {projects.map((project, index) => (
                        <div key={index} style={{ backgroundImage: `url(${project.image})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <div className=' flex flex-col items-center'>
                                    <span className='text-2xl font-bold text-white tracking-wider text-center px-4'>{project.name}</span>
                                    <div className='pt-8 text-center'>
                                        {project.githubLink.map((link, idx) => (
                                            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github Repository</button>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
