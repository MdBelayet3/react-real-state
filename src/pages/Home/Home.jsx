import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <div className=" max-w-sm md:max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Slider></Slider>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;