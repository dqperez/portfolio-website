import React from 'react';
import Layout from './Layout';
import About from '../components/About.jsx';
import GradientQuote from '../components/GradientQuote.jsx';
import Toolkit from '../components/Toolkit.jsx';

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-bg">
        <div className="flex flex-col">
          <About />
          <GradientQuote />
          <Toolkit />
        </div>

      </div>
    </Layout>
  )
}

export default AboutPage;