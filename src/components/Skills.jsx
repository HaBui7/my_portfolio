import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import CSHARP from "../assets/csharp.png";
import GITHUB from "../assets/github.png";
import JAVASCRIPT from "../assets/javascript.png";
import MONGO from "../assets/mongo.png";
import NODE from "../assets/node.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import UNITY from "../assets/unity.png";

const technologies = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'C#', icon: CSHARP },
    { name: 'GitHub', icon: GITHUB },
    { name: 'JavaScript', icon: JAVASCRIPT },
    { name: 'MongoDB', icon: MONGO },
    { name: 'Node.js', icon: NODE },
    { name: 'React', icon: REACT },
    { name: 'Tailwind CSS', icon: TAILWIND },
    { name: 'Unity', icon: UNITY }
];

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#EC297B]'>Experience</p>
                    <p className='py-4'>Technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {technologies.map((tech, index) => (
                        <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                            <img className="w-20 mx-auto" src={tech.icon} alt={`${tech.name} icon`} />
                            <p className='mt-4'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
