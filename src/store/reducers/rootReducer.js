const initState = {
    users: [
        {id: 1, name: "Eric"},
        {id: 2, name: "Hoi Dan IT"},
        {id: 3, name: "Hoi Dan IT voi Eric"}
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "DELETE_USER":
            console.log('>>> check state action', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            // state = {...state, users}
            console.log("-----",{...state})
            return {
                users 
            };
            case"CREATE_USER":
            let id = Math.floor(Math.random() * 10000)
            let user = {id: id, name: `random ${id}`}
            return {
                users: [...state.users, user]
            }
            default:
                return state

    }

}

export default rootReducer;