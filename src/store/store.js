import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer';

const preloadedState = {
    currentUser: null,
    // isChangingUserData: false,
    users: [{
        id: 1,
        username: 'Paul',
        password: 'faul',
        highscore: 0
    }]
}

const store = configureStore({ reducer, preloadedState })

export default store