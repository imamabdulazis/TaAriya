const { AUTH_ACTION } = require("../../utils/Constants");

const initialState = {
    loading: false,
    token: undefined,
    failed: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTION.AUTH_REQ_LOGIN:
            return {
                loading: true,
            }
        case AUTH_ACTION.AUTH_SUCCESS_LOGIN:
            return {
                loading: false,
                token: action.token,
            }
        case AUTH_ACTION.AUTH_FAILED_LOGIN:
            return {
                loading: false,
                failed: true,
            }
        case AUTH_ACTION.AUTH_CLEAR_LOGIN:
            return {
                ...initialState
            }
        default:
            return state;
    }
}