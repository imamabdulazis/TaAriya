import { RNToasty } from "react-native-toasty";
const { AUTH_ACTION } = require("../../utils/Constants");

export const login = (username, password) => dispatch => {
    dispatch({ type: AUTH_ACTION.AUTH_REQ_LOGIN });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password })
    };
    return fetch(`https://asia-east2-bengkelariya-d3fe8.cloudfunctions.net/api/login`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
            const { status, email, token, message } = response;
            if (status == 200) {
                dispatch({
                    type: AUTH_ACTION.AUTH_SUCCESS_LOGIN,
                    token: token,
                })
                RNToasty.Success({ title: "Login berhasil" });
            } else {
                dispatch({
                    type: AUTH_ACTION.AUTH_FAILED_LOGIN
                })
                RNToasty.Show({ title: message });
            }
        }).catch((err) => {
            dispatch({
                type: AUTH_ACTION.AUTH_FAILED_LOGIN
            })
            console.log(err);
        })
}

export const logout = () => (dispatch) => {
    dispatch({ type: AUTH_ACTION.AUTH_CLEAR_LOGIN });
}