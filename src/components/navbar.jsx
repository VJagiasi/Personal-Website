import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-around bg-background h-28 p-10" >
        <h2 className="text-2xl text-white md:text-2xl font-rubik font-bold">Home</h2>
        <ul className="flex justify-center text-2xl text-white font-bold font-rubik gap-4">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Resume</li>
        </ul>
    </div>
  )
}

export default Navbar