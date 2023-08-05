import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id="contact"className="bg-background h-auto text-xl font-rubik flex flex-col justify-start items-end px-8 text-text-color text-left ">
      <div className="max-w-4xl mx-auto mt-10">
          <h1 className="nav-link text-4xl mt-4 mb-6 text-white font-bold">Want to connect?</h1>
          <p className="text-2xl font-poppins">Feel free to get in touch with me. I'd love to chat about startups or new ideas to build and work on together</p>
        <div className="flex flex-row-reverse justify-around items-center my-10">
          <div>
            <p>Crafted with React and TailwindCSS</p>
            <p>Copyright © VJagiasi 2023</p>
          </div>
          <div className="text-text-color my-6">
              <a href="https://github.com/VJagiasi" className="mr-4"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com/in/vihaanjagiasi/"className="mr-4"><FontAwesomeIcon icon={faLinkedin} size="2x" href=""></FontAwesomeIcon></a>
              <a href="mailto:vihaan@jagiasi.com" className="mr-4"><FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon></a>
              <a href="https://twitter.com/VihaanJagiasi" className="mr-4"><FontAwesomeIcon icon={faTwitter} size="2x" href=""></FontAwesomeIcon></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer