import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  return (
    <div id="about" className="bg-background h-auto p-10 text-2xl font-bold font-rubik flex flex-col justify-center items-start px-8 text-text-color text-left">
      <div className="max-w-4xl mx-auto">
        <div className="mt-6 mb-6">
          <h1 className="flex mt-6 mb-6 text-5xl text-white">Hi, I'm Vihaan! <div className="text-6xl animate-wave">👋</div></h1>
          <p className="text-3xl text-text-color">Full Stack Ninja, iOS Wizard</p>
          <p className="text-3xl text-text-color">Prev <span className="text-primary-color">@CogNext</span></p>
        </div>
        <div className="text-text-color my-6">
              <a href="https://github.com/VJagiasi" target="_blank" className="mr-4"><FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com/in/vihaanjagiasi/" target="_blank" className="mr-4"><FontAwesomeIcon icon={faLinkedin} size="xl"></FontAwesomeIcon></a>
              <a href="mailto:vihaan@jagiasi.com" target="_blank" className="mr-4"><FontAwesomeIcon icon={faEnvelope} size="xl"></FontAwesomeIcon></a>
              <a href="https://twitter.com/VihaanJagiasi" target="_blank" className="mr-4"><FontAwesomeIcon icon={faTwitter} size="xl"></FontAwesomeIcon></a>
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
