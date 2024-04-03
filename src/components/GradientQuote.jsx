import React from 'react';

const GradientQuote = () => {
  return (
    <div className="flex items-center justify-center h-screen px-8">
        <div class="flex flex items-center justify-center h-40 w-screen p-20 lg:w-3/4 mb-20 rounded-lg bg-gradient-to-r from-footer to-button">
                <p className="text-lg" style={{ color: 'white' }}>
                    “The simplest way to achieve simplicity is through thoughtful reduction.”
                    — John Maeda            
                </p>
        </div>
    </div>
  )
}

export default GradientQuote;