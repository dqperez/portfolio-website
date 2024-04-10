import React from 'react'
import projectIcon from "../assets/projectIcon.png";

const OverviewCard = (props) => {
    const { title, type, summary, icon } = props;
    
  return (
    <div className="flex flex-col block rounded-lg bg-bg_white shadow-md max-w-96">
      <img className="rounded-t-lg shadow-none p-2" src={icon} alt="Project Icon" />
      <div className="p-4 h-30">
        <h5 className="text-md font-bold leading-tight text-cardTitle">{title}</h5>
        <p className="text-xs text-footer font-bold">{type}</p>
        <p className="text-sm text-cardBody py-2">{summary}</p>
      </div>

      {/* <div className="flex flex-col p-4">
        <div role="button"
          className="px-3 w-max flex gap-2 items-center rounded-full bg-footer text-bg_white hover:bg-opacity-75">
          <span class="block text-xs">UI/UX</span>
        </div> 
      </div>   */}

     
</div>

  )
}

export default OverviewCard;
