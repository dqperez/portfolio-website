import React from 'react';

const GradientQuote = () => {
  return (
    <div className="flex items-center justify-center h-auto px-8">
        <div class="flex flex items-center justify-center h-16 w-auto p-20 lg:w-1/2 rounded-lg bg-gradient-to-r from-footer to-button">
                <p className="text-sm lg:text-lg" style={{ color: 'white' }}>
                    “The simplest way to achieve simplicity is through thoughtful reduction.”
                    — John Maeda            
                </p>
        </div>
    </div>
  )
}

export default GradientQuote;