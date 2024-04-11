import React, { useRef } from 'react';
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import GradientQuote from "../components/GradientQuote";
import Toolkit from "../components/Toolkit";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";


const MainPage = () => {
    const homeRef = useRef(null);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToElement = (ref, duration) => {
        const targetElement = ref.current;
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
    
        const animateScroll = currentTime => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const scrollY = startPosition + distance * progress;
          window.scrollTo(0, scrollY);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
    
        requestAnimationFrame(animateScroll);
      };

    return (
        <div className="flex flex-col bg-bg h-auto">
            <NavBar homeRef={homeRef} workRef={workRef} aboutRef={aboutRef} contactRef={contactRef}/>

            <div id="content" className="pt-32 md:pt-8 lg:pt-8">

                <div id="home" className="flex flex-col justify-center items-center h-screen w-screen"> 
                    <Home homeRef={homeRef}/>
                    <div className="flex pb-8 animate-bounce">
                        <button onClick={() => scrollToElement(workRef, 1200)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-header w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                            </svg>
                        </button> 
                    </div>                            
                </div>

                <div className="flex flex-col gap-8">
                    <Overview workRef={workRef} />
                    <Experience />
                </div>

                <div className="flex flex-col pb-16 justify-center items-center">
                    <About aboutRef={aboutRef}/>
                    <Toolkit />
                </div>

                <div className="flex flex-col h-auto">
                    <GradientQuote />
                    <Contact contactRef={contactRef}/>
                </div>
                <Footer />


            </div>
            

        </div>
        
    );
};

export default MainPage;