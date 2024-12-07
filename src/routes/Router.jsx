import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/about" element={<AboutUs></AboutUs>} ></Route>

                {/* error element */}
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Route>
        </Routes>
    );
};

export default Router;