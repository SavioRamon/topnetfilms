import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/screens/Home";


export default function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};