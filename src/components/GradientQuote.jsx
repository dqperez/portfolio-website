import React from 'react';

const GradientQuote = () => {
  return (
    <div className="flex h-auto px-8 lg:px-48">
        <div class="flex flex font-serif items-center justify-center h-24 w-screen p-20 rounded-lg bg-gradient-to-r from-footer to-button">
                <p className="text-sm text-center lg:text-lg" style={{ color: 'white' }}>
                    “The simplest way to achieve simplicity is through thoughtful reduction.”
                    <br />— John Maeda            
                </p>
        </div>
    </div>
  )
}

export default GradientQuote;