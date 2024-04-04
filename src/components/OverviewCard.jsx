import React from 'react'
import projectIcon from "../assets/projectIcon.png";

const OverviewCard = (props) => {
    const { title, summary, icon } = props;
    
  return (
    <div className="flex flex-col block rounded-lg bg-bg_white shadow-md max-w-96">
      <img className="p-2 rounded-t-lg shadow-none" src={icon} alt="Project Icon" />
      <div className="p-4">
        <h5 className="text-lg font-medium leading-tight text-cardTitle">{title}</h5>
        <p className="text-sm text-cardBody">{summary}</p>
      </div>        
</div>

  )
}

export default OverviewCard;
