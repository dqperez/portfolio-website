import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import Layout from "./Layout";
import GradientQuote from "../components/GradientQuote";
import Toolkit from "../components/Toolkit";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const MainPage = () => {
    return (
        <Layout>
            <div className="flex h-screen">
                <div id="home" className="flex flex-col justify-center items-center w-screen"> 
                    <Home />
                    <div className="flex py-6 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-header w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                    </div>                            
                </div> 
            </div>
            
            <div className="flex flex-col h-auto">
                <Overview />
                <Toolkit />
            </div>

            <div className="flex flex-col pb-16 gap-8 justify-center items-center">
                <About />
                <Experience />
            </div>

            <div className="flex flex-col h-auto">
                <GradientQuote />
                <Contact />
            </div>
        </Layout>
        
    );
};

export default MainPage;