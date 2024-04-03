import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import Layout from "./Layout";
import GradientQuote from "../components/GradientQuote";

const MainPage = () => {
    return (
        <Layout>
            <div className="flex h-screen">
                <div id="home" className="flex flex-col justify-center items-center w-full"> 
                    <Home />
                    <div className="flex py-6 animate-bounce">
                        <svg className="text-header" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>       
                    </div>                            
                </div> 
            </div>
            
            <div className="flex h-auto p-16">
                <Overview />
            </div>            
        </Layout>
        
    );
};

export default MainPage;