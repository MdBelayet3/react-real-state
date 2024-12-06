import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home></Home>} ></Route>
        </Routes>
    );
};

export default Router;