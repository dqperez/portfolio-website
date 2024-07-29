import React from 'react';
import VerticalStepper from './VerticalStepper';

const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>

        <p className="text-3xl text-header font-extrabold">Experience</p>
        <div class="w-3/4 xl:w-1/3 py-8">
        <VerticalStepper/>
        </div>

    </div>
  )
}

export default Experience;