import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Login from "../components/screens/authentication/components/Login";
import Register from "../components/screens/authentication/components/Register";
import Home from "../components/screens/Home";
import Search from "../components/screens/Search";
import Film from "../components/screens/Film";
import Genre from "../components/screens/Genre";


export default function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    <Route path="search" element={<Search />} />
                    <Route path="search/:query" element={<Search />} />
                    <Route path="film" element={<Search />} />

                    <Route path="genre/:query" element={<Genre />} />

                    <Route path="film/:id" element={<Film />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}