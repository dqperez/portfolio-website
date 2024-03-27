import NavBar from "../components/NavBar";
import Home from "../components/Home";

const MainPage = () => {
    return (
        <div className="bg-bg flex h-screen">
            <div className="fixed w-screen">
                <NavBar /> 
            </div>
            <div className="flex justify-center items-center w-full">
                <Home />
            </div>
        </div>
    );
};

export default MainPage;