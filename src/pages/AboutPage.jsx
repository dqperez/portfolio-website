import React from 'react';
import Layout from './Layout';
import About from '../components/About.jsx';
import GradientQuote from '../components/GradientQuote.jsx';

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-bg">
        <div className="flex flex-col">
          <About />
          <GradientQuote />
        </div>

      </div>
    </Layout>
  )
}

export default AboutPage;