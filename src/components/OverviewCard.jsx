import React from 'react'
import projectIcon from "../assets/projectIcon.png";

const OverviewCard = (props) => {
    const { title, summary } = props;
  return (
    <div className="flex flex-col block rounded-lg bg-white shadow-md max-w-96">
        <img class="rounded-t-lg" src={projectIcon}/>
        <div class="p-6">
            <h5 class="text-lg font-medium leading-tight text-cardTitle">{title}</h5>
            <p class="text-sm text-cardBody">{summary}</p>
        </div>        
    </div>
  )
}

export default OverviewCard;
