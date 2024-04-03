import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-bg flex h-screen">
                <div className="fixed w-screen">
                    <NavBar /> 
                </div>
                <div id="home" className="flex flex-col justify-center items-center w-full">                   
                    <Home />
                    <div className="flex mt-24">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>       
                    </div>                            
                </div>
                
            </div>
            {/* <div className="bg-bg flex h-screen">
            
            </div> */}
            <Footer />
        </div>
        
    );
};

export default MainPage;