import React from 'react';
import Layout from './Layout';
import About from '../components/About.jsx';
import GradientQuote from '../components/GradientQuote.jsx';
import Toolkit from '../components/Toolkit.jsx';
import Experience from '../components/Experience.jsx';

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex h-auto w-screen bg-bg">
        <div className="flex flex-col">
          <div className="flex flex-col pt-72 pb-48 justify-center items-center">
            <About />
          </div>
          <div className="flex items-center justify-center pb-16 h-1/2">
            <GradientQuote />
          </div>

          <div className="h-auto">
            <Toolkit />
            <Experience />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default AboutPage;