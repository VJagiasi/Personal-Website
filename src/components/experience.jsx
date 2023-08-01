import React from 'react'
import cognext from '../icons/cognext.png'
import baycream from '../icons/baycream.png'

const Experience = () => {
  return (
    <div className="bg-background h-auto text-xl font-rubik flex flex-col justify-center items-start px-8 text-text-color text-left">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mt-4 text-white font-bold mb-6">Experience</h2>
        <p className="my-7 text-2xl font-normal">From coding with coffee to debugging with donuts, I've sprinkled my magic all over these companies</p>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-center items-center gap-2 rounded-lg mb-10">
            {/* <img src={cognext} alt="logo" className="w-40 h-auto rounded-lg"/> */}
            <div>
              <h3 className="text-2xl text-white font-bold ">CogNext.ai</h3>
              <p>Software Engineering Intern</p>
              <p>New York, NY, Remote</p>
              <p>May 2023 - Present</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4 rounded-lg">
            {/* <img src={baycream} alt="logo" className="w-28 h-auto rounded-lg"/> */}
            <div>
              <h3 className="text-2xl text-white font-bold">Bay Cream</h3>
              <p>Full Stack Developer</p>
              <p>Toronto, ON</p>
              <p>Nov 2020 - Jan 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience