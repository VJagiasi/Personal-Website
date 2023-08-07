import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import picture from "../images/Profile picture zoomedin.png"
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div id="about" className="bg-background h-auto p-10 text-2xl font-bold font-rubik flex flex-col justify-center items-start px-8 text-text-color text-left">
      <div className="max-w-4xl mx-auto mt-24">
        <div className="mt-6 mb-6">
          <img src={picture} alt="my-beautiful-face" className="overflow-hidden rounded-full w-32 h-32 my-3"/>
          <h1 className="flex mt-6 mb-6 text-5xl text-white">Hi, I'm&nbsp;<span className='nav-link'>Vihaan!</span><div className="text-6xl animate-wave">👋</div></h1>
          <p className="text-3xl text-text-color flex">I'm a&nbsp;
            <span className="text-3xl text-blue-400 font-poppins font-extrabold">
              <Typewriter className=""
                onInit={(typewriter) => {
                  typewriter.typeString("Full Stack Engineer")
                  .pauseFor(1500)
                  .deleteAll()
                  .changeDeleteSpeed(2000)
                  typewriter.typeString("iOS Developer")
                  .pauseFor(1500)
                  .deleteAll()
                  .changeDeleteSpeed(2000)
                  .start()
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </span> 
          </p>    
          <p className="text-3xl text-text-color">Currently building s4 <a href="https://buildspace.so/" target="_blank" rel="noreferrer" className="text-primary-color nav-link">@_buildspace</a></p>
          <p className="text-3xl text-text-color">Prev <a href="https://www.cognext.ai/" target="_blank" rel="noreferrer" className="text-primary-color nav-link">@CogNext</a></p>
        </div>
        <div className="text-text-color my-6">
            <a href="https://github.com/VJagiasi" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="xl" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/vihaanjagiasi/"className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="xl"  className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="mailto:vihaan@jagiasi.com" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="xl" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="https://twitter.com/VihaanJagiasi" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="xl" href="" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
        </div>
        <div className="mt-10 mb-5 whitespace-normal">
          <div className="my-6">I'm a second year student specializing in SWE at the <span className="text-primary-color">@University of Waterloo.</span></div>
          <div className="my-6">In my free time you can catch me taking long bike rides, running around clicking pictures or either playing basketball, badminton or football</div>
          <div className="">I love collaborating with new people to build stuff which can make an impact on people's lives</div>
        </div>
      </div>
    </div>
  )
}

export default Home
