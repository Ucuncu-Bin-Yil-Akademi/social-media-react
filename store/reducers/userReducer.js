const initialState =  {
    user: {
        name: "",
        lastname: "",
        username: "",
    },
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
         return {...state, user: action.payload}

         case 'LOGOUT':
            return {...state, user: {}}
        
        default:
            return state;
    }
}

export default userReducer;