import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/screens/authentication/components/Login";
import Register from "../components/screens/authentication/components/Register";
import Home from "../components/screens/Home";


export default function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};