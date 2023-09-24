import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import picture from "../images/Profile picture zoomedin.png"
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div id="about" className="bg-background dark:bg-white dark:text-black h-auto p-10 text-2xl font-bold font-rubik flex flex-col justify-center items-start px-8 text-text-color text-left">
      <div className="max-w-4xl mx-auto mt-24">
        <div className="mt-6 mb-6">
          <img src={picture} alt="my-beautiful-face" className="overflow-hidden rounded-full w-32 h-32 my-3"/>
          <h1 className="mt-6 mb-6 text-5xl text-white dark:text-black">Hey, I'm Vihaan
          </h1>
          <p className="text-xl text-text-color dark:text-black flex">I'm a&nbsp;
            <span className="text-xl">
              <Typewriter className=""
                onInit={(typewriter) => {
                  typewriter.typeString("Programmer")
                  .pauseFor(1500)
                  .deleteAll()
                  .changeDeleteSpeed(100000)
                  typewriter.typeString("Gamer at Heart")
                  .pauseFor(1500)
                  .deleteAll()
                  .changeDeleteSpeed(100000)
                  typewriter.typeString("Runner")
                  .pauseFor(1500)
                  .deleteAll()
                  .changeDeleteSpeed(100000)
                  .start()
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </span> 
          </p>    
        </div>
        <div className="text-text-color my-6 dark:text-black">
            <a href="https://github.com/VJagiasi" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="xl" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/vihaanjagiasi/"className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="xl"  className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="mailto:vihaan@jagiasi.com" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="xl" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
            <a href="https://twitter.com/VihaanJagiasi" className="mr-4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="xl" href="" className="transition hover:-translate-y-1 hover: motion-reduce:transition-none motion-reduce:hover:transform-none"></FontAwesomeIcon></a>
        </div>
        <div className="mt-10 whitespace-normal font-normal">
          <div className="my-6">I'm a second year student specializing in SWE at the <span className="text-primary-color">@University of Waterloo.</span></div>
          <div className="my-6">In my free time you can catch me taking long bike rides, running around clicking pictures or either playing basketball, badminton or football</div>
          <div className="">I love collaborating with new people to build stuff which can make an impact on people's lives</div>
        </div>
      </div>
    </div>
  )
}

export default Home
