import React from 'react'
import OverviewCard from './OverviewCard';

const Overview = () => {
  return (
    <div className="flex w-screen justify-center">
        <div className="flex flex-col items-center mt-8">
            <p className="text-4xl text-header font-bold">Overview</p>
            <p className="text-md text-center text-body">some projects i worked on/ contributed to</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
                <OverviewCard title="TyphooNews" summary="A crisis information dashboard system using feedback-based text classification of typhoon-related tweets in the Philippines"/>
                <OverviewCard title="Lif Game" summary="A play-to-earn platform highlighting user-created games and empowering earnings through play."/>
                <OverviewCard title="Get Tweets" summary="A web application that scrapes tweets, analyzes sentiment, and visualizes the results."/>
                <OverviewCard title="Lif Posts" summary="An AI-driven web application that features document editing and article creation"/>
            </div>
        </div>
    </div>
  )
}

export default Overview;