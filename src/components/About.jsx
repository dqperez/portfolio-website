import React from 'react';
import abouticon from "../assets/abouticon.png";

const About = ({aboutRef}) => {
  return (
    <div ref={aboutRef} id="about" className="flex flex-col md:flex-row lg:flex-row justify-center items-center h-1/4">
      <div className="h-60 w-60">
                <img src={abouticon} className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 lg:w-1/3 lg:p-16">
        <p className="text-4xl text-header font-bold">About me</p>
        <p className="text-lg text-body my-4">
        Hello again! I graduated from the University of the Philippines Manila with a bachelor’s degree in Computer Science. I’m currently working as a software developer, with tasks mostly focused on front-end development and web design. 
          <br/><br/>
          I see programming as a field full of endless opportunities for learning and problem-solving. It keeps me engaged and allows me to explore my creativity by merging tech with design. On my free time, you can find me playing competitive or cozy games, creating digital artworks, and finding the best place for matcha.
        </p>
      </div>
    </div>
  )
}

export default About;