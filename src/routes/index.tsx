import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Login from "../components/screens/authentication/components/Login";
import Register from "../components/screens/authentication/components/Register";
import Home from "../components/screens/Home";
import Film from "../components/screens/Film";
import Search from "../components/screens/Search";
import SearchByName from "../components/screens/Search/components/SearchByName";
import SearchByGenre from "../components/screens/Search/components/SearchByGenre";
import Profile from "../components/screens/Profile";


export default function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    <Route path="film" element={<Search />} />
                    <Route path="search" element={<Search />}>
                        <Route path="genre" element={<SearchByGenre />} />
                        <Route path="name" element={<SearchByName />} />
                    </Route>
                    <Route path="film/:id" element={<Film />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}