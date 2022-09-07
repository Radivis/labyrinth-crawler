const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            {
                let loggedInUser = null

                state.users.forEach(user => {
                    if (action.username === user.username && action.password === user.password) {
                        loggedInUser = user
                    }
                })

                if (loggedInUser) {
                    console.log('Login successful');
                    return { ...state, currentUser: loggedInUser }
                } else {
                    // No maching login data found:
                    console.log('Login failed');
                    return state
                }
            }

        case 'LOGOUT':
            console.log('User logged out');
            return { ...state, currentUser: null }

        case 'CHANGE_USER_DATA':
            if (action.username !== ''
                && action.password !== ''
                && action.password === action.passwordRepeat) {

                console.log('Userdata changed successfully');

                let [newUser] = state.users.filter(user => user.id === state.currentUser.id)
                // Copy user data
                newUser = { ...newUser }
                // Set new user data
                newUser.username = action.username
                newUser.password = action.password

                const oldUsers = state.users.filter(user => user.id !== state.currentUser.id)
                return { ...state, users: [...oldUsers, newUser], currentUser: newUser }

            } else {
                console.log('Userdata change failed');
                return state
            }

        case 'TOGGLE_CHANGE_USER_DATA':
            return { ...state, isChangingUserData: !state.isChangingUserData }

        case 'REGISTER_USER':
            if (action.username !== ''
                && action.password !== ''
                && action.password === action.passwordRepeat) {
                console.log('User registered successfully')
                return {
                    ...state, isLoggedIn: true,
                    users: [...state.users, {
                        id: Math.max(...state.users.map(user => user.id)) + 1,
                        username: action.username,
                        password: action.password,
                        highscore: 0
                    }
                    ]
                }
            }

        case 'UPDATE_HIGHSCORE':
            if (action.score > state.currentUser.highscore) {
                let [updatedUser] = state.users.filter(user => user.id === state.currentUser.id)
                // Copy user data
                updatedUser = { ...updatedUser }
                updatedUser.highscore = action.score

                const oldUsers = state.users.filter(user => user.id !== state.currentUser.id)

                const newState = { ...state, users: [...oldUsers, updatedUser], currentUser: updatedUser }

                const url = 'http://127.0.0.1:3010/save'
                fetch(url, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newState)
                }).then(res => {
                    console.log(res);
                })
                    .catch(console.error)

                return newState

            } else {
                return state
            }

        case 'LOAD_GAME_JSON':
            return action.data

        default:
            return state
    }
}

export default reducer