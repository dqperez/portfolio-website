import React from 'react';

const Toolkit = () => {
  return (
    <div className="flex h-auto w-screen justify-center">
        <div className="flex flex-col items-center mt-8">
            <p className="text-4xl text-header font-bold">My Toolkit</p>
            <p className="text-md text-center text-body">the skills, tools and technologies I use for my projects</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8">
            </div>
        </div>

    </div>
  )
}

export default Toolkit;