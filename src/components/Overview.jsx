import React from 'react'
import OverviewCard from './OverviewCard';
import gt from "../assets/gt.png";
import lifg from "../assets/lifg.png";
import lifp from "../assets/lifp.png";
import typ from "../assets/typ.png";
import dp from "../assets/dp.png";

const Overview = ({workRef}) => {
  return (
    <div ref={workRef} id="work" className="flex w-screen justify-center pt-24">
        <div className="flex flex-col items-center">
            <p className="text-3xl text-header font-extrabold">Work</p>
            <p className="text-sm text-center text-body">some projects i worked on/ contributed to </p>
            <p className="text-sm text-header">(other projects' details are protected under NDA: overview available upon request )</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
                <OverviewCard icon={typ} title="TyphooNews" type="PYTHON DJANGO | VUE.JS | MYSQL | VUETIFY"summary="A crisis information dashboard system using feedback-based text classification of typhoon-related tweets in the Philippines"/>
                <OverviewCard icon={lifg} title="Lif Game" type="FIGMA | PYTHON DJANGO | BOOTSTRAP"summary="A play-to-earn platform highlighting user-created games and empowering earnings through play."/>
                <OverviewCard icon={gt} title="Get Tweets" type="PYTHON DJANGO | POSTGRESQL | BOOTSTRAP" summary="A web application that scrapes tweets, analyzes sentiment, and visualizes the results."/>
                <OverviewCard icon={dp} title="My Portfolio" type="FIGMA | REACT.JS | TAILWIND CSS" summary="A website to present a collection of my projects and skills to potential collaborators and employers."/>
                {/* <OverviewCard icon={lifp} title="Lif Posts" type="FIGMA" summary="An AI-driven web application that features document editing and article creation"/> */}
            </div>
        </div>
    </div>
  )
}

export default Overview;