import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-background h-25 p-7 sticky top-0 shadow" >
          <h2 className="text-xl text-white md:text-xl font-rubik font-bold">Home</h2>
          <ul className="flex justify-center text-xl text-white font-bold font-rubik gap-4">
              <li><Link to="about" spy={true} smooth={true} className="nav-link">About</Link></li>
              <li><Link to="experience" spy={true} smooth={true} className="nav-link">Experience</Link></li>
              {/* <li>Projects</li> */}
              <li><Link to="contact" spy={true} smooth={true} className="nav-link">Contact</Link></li>
              <a href="https://drive.google.com/file/d/1gh3ddSXLany8HAJIQC4aOxZF5R0tyUC5/view?usp=sharing" target="_blank" className="nav-link"><li>Resume</li></a>
          </ul>
    </div>
  )
}

export default Navbar