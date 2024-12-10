import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BelayetVista Homes | Home</title>
            </Helmet>
            <div className=" max-w-sm md:max-w-7xl mx-auto">
                <Slider></Slider>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;