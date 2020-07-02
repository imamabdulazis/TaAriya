const { AUTH_ACTION } = require("../../utils/Constants");

const initialState = {
    loading: false,
    loadingLogout: false,
    user: undefined,
    failed: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTION.AUTH_REQ_LOGIN:
            return {
                loading: true,
            }
        case AUTH_ACTION.AUTH_SUCCESS_LOGIN:
            return {
                loading: false,
                user: action.payload,
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