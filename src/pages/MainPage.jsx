import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import Layout from "./Layout";

const MainPage = () => {
    return (
        <Layout>
            <div className="bg-bg flex h-screen">
                <div id="home" className="flex flex-col justify-center items-center w-full">                   
                    <Home />
                    {/* <div className="flex">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>       
                    </div>                             */}
                </div>
                
            </div>
            <div className="bg-bg flex h-screen">
                <Overview />
            </div>

            <div className="bg-bg flex items-center justify-center h-80">
                <div class="flex flex items-center justify-center h-40 w-1/2 mb-20 rounded-lg bg-gradient-to-r from-footer to-button">
                <p className="text-lg" style={{ color: 'white' }}>
                    “The simplest way to achieve simplicity is through thoughtful reduction.”
                    — John Maeda            
                </p>
                </div>
            </div>
        </Layout>
        
    );
};

export default MainPage;