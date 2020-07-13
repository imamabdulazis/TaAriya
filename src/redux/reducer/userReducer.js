const { AUTH_ACTION } = require("../../utils/Constants");

const initialState = {
    loading: false,
    token: undefined,
    loginType: 'user',
    failed: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTION.AUTH_REQ_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case AUTH_ACTION.AUTH_SUCCESS_LOGIN:
            return {
                ...state,
                loading: false,
                token: action.token,
            }
        case AUTH_ACTION.AUTH_FAILED_LOGIN:
            return {
                ...state,
                loading: false,
                failed: true,
            }
        case AUTH_ACTION.AUTH_LOGIN_TYPE:
            return {
                ...state,
                loginType: action.loginType,
            }
        case AUTH_ACTION.AUTH_CLEAR_LOGIN:
            return {
                ...initialState
            }
        default:
            return state;
    }
}