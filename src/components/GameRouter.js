import React from "react";
import {Routes, Route} from 'react-router-dom'

import ChangeUserData from "./ChangeUserData";
import Game from "./game";
import HighScores from "./HighScores";
import Login from "./Login";
import Logout from "./Logout";
import RegisterUser from "./RegisterUser";

const GameRouter = () => {
    return <Routes>
        <Route path="/" element={<Game />}/>
        <Route path="/change-user-data" element={<ChangeUserData />}/>
        <Route path="/highscores" element={<HighScores />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<RegisterUser />}/>
    </Routes>
}

export default GameRouter;