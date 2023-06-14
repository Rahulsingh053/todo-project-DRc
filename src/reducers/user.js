import { LOGIN, LOGOUT } from "../actions/userAction";

const initialState = {
    user: {},
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload,
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

export default userReducer;
