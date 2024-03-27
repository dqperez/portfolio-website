import icon from "../assets/icon.png";

const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center lg:flex-row">
            <div className="w-1/2 lg:w-1/3">
                <p className="text-4xl text-subtitles font-bold">Hello, I'm <span className="text-4xl text-header">Darlene!🌺</span>
                    </p>
                <p className="text-lg text-subtitles my-4">I’m a Software Developer based in Quezon City, Philippines. With industry experience in Front-End Development and Web Design, I enjoy bringing ideas to life in the digital space.</p>
            </div>
            <div className="h-80 w-80 relative">
                <img src={icon} className="w-full h-full object-cover" />
            </div>


        </div>
    );
};

export default Home;