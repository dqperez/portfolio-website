import React from 'react';
import abouticon from "../assets/abouticon.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center h-1/4">
      <div className="h-60 w-60 relative">
                <img src={abouticon} className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 lg:w-1/3 mx-16">
        <p className="text-4xl text-header font-bold">About me</p>
        <p className="text-lg text-body my-4">
          Hello again! I graduated from the University of the Philippines Manila with a bachelor’s degree in Computer Science.
          <br/><br/>
          Other than coding, I spend most of my free time playing competitive or cozy games 🤓. I've also been trying to read more so feel free to reach out to me with any book recommendations!
        </p>
      </div>
    </div>
  )
}

export default About;