import React from 'react';
import { useDispatch } from 'react-redux';

const Logout = () => {

    const dispatch = useDispatch()

    dispatch({
        type: 'LOGOUT'
    })

    return <p>You have been logged out. </p>
}

export default Logout