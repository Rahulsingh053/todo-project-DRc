export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (Username) => {
    return {
        type: LOGIN,
        payload: {
            Username,
            isLoggedIn: true,
        },
    };
};
export const logout = () => {
    return {
        type: LOGOUT,
    };
};
