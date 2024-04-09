import React from 'react'
import OverviewCard from './OverviewCard';
import gt from "../assets/gt.png";
import lifg from "../assets/lifg.png";
import lifp from "../assets/lifp.png";
import typ from "../assets/typ.png";

const Overview = ({workRef}) => {
  return (
    <div ref={workRef} id="work" className="flex w-screen justify-center">
        <div className="flex flex-col items-center">
            <p className="text-4xl text-header font-bold">Work</p>
            <p className="text-sm text-center text-body">some projects i worked on/ contributed to</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
                <OverviewCard icon={typ} title="TyphooNews" summary="A crisis information dashboard system using feedback-based text classification of typhoon-related tweets in the Philippines"/>
                <OverviewCard icon={lifg} title="Lif Game" summary="A play-to-earn platform highlighting user-created games and empowering earnings through play."/>
                <OverviewCard icon={gt} title="Get Tweets" summary="A web application that scrapes tweets, analyzes sentiment, and visualizes the results."/>
                <OverviewCard icon={lifp} title="Lif Posts" summary="An AI-driven web application that features document editing and article creation"/>
            </div>
        </div>
    </div>
  )
}

export default Overview;