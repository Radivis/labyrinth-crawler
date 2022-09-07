import React from "react";
import { useSelector } from "react-redux";

const HighScores = () => {
    const users = useSelector(state => state.users)

    return <ol>
        {users.map(user => <li>{user.username}: {user.highscore}</li>)}
    </ol>
}

export default HighScores