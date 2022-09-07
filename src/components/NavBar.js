import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {

    const dispatch = useDispatch()

    // Load game data from game.json ONCE at initialization of NavBar!
    useEffect(() => {

        const url = 'http://127.0.0.1:3010/load'
        fetch(url).then(res => res.json()).then(data => {
            dispatch({
                type: 'LOAD_GAME_JSON',
                data
            })
        })
            .catch(console.error)

    }, [])

    const currentUser = useSelector(state => state.currentUser)
    /*
    Anpassung Register und ChangeUserData sind nun die selbe Page !
    */
    return <div className="navbar">
        <span>{currentUser ? `Hello, ${currentUser.username}, your highscore is: ${currentUser.highscore}` : "Not logged in"}</span>
        <Link to="/">Game</Link>
        {!currentUser ? <Link to="/login">Login</Link> : <Link to="/change-user-data">Change user data</Link>}
        {currentUser ? <Link to="/logout">Logout</Link> : <Link to="/register">Register</Link>}
        <Link to="/highscores">Highscores</Link>
    </div>
}

export default NavBar