import React from 'react';

const TechCard = (props) => {
    const { svgData, title } = props;

  return (
    <div className="flex flex-col items-center">
        {svgData && (
          <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" dangerouslySetInnerHTML={{ __html: svgData }} />
        )}
        <p className="text-sm text-cardBody">{title}</p>
    </div>
  );
};

export default TechCard;
