import React from 'react'
import typescript from '../icons/typescript.png'
import react from '../icons/react.png'
import python from '../icons/python.png'
import nodejs from '../icons/nodejs.png'
import graphql from '../icons/graphql.png'

function Skills() {
  return (
    <div className="bg-background h-auto dark:text-black dark:bg-white text-2xl font-bold font-rubik flex flex-col justify-center items-start px-8 text-text-color text-left">
      <div className="max-w-4xl mx-auto">
          <h1 className="nav-link text-4xl mt-4 mb-6 text-white dark:text-black">Skills</h1>
          <p className="my-4 font-normal">Though I'm always excited to use the latest and greatest technologies, these are my tried and tested go to tools when building any project.</p>
          <div className="flex justify-center my-20">
            <div className="bg-background-icons text-xl text-white py-8 px-2 rounded-3xl b mx-6 flex flex-col justify-center items-center transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img src={typescript} alt="logo"  width="50px"/>
                <p>Typescript</p>
            </div>
            <div className="bg-background-icons text-xl text-white py-8 px-8 rounded-3xl b mx-6 flex flex-col justify-center items-center transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img src={react} alt="logo" width="50px"/>
                <p>React</p>
            </div>
            <div className="bg-background-icons text-xl text-white py-8 px-6 rounded-3xl b mx-6 flex flex-col justify-center items-center transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img src={python} alt="logo" width="50px"/>
                <p>Python</p>
            </div>
            <div className="bg-background-icons text-xl text-white py-8 px-6 rounded-3xl b mx-6 flex flex-col justify-center items-center transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img src={nodejs} alt="logo" width="50px"/>
                <p>NodeJS</p>
            </div>
            <div className="bg-background-icons text-xl text-white py-8 px-5 rounded-3xl b mx-6 flex flex-col justify-center items-center transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img src={graphql} alt="logo" width="50px"/>
                <p>GraphQL</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills
