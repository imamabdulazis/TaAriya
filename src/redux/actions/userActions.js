import { RNToasty } from "react-native-toasty";
import userService from "../../services/userService";
const { AUTH_ACTION } = require("../../utils/Constants");

export const login = (username, password) => dispatch => {
    dispatch({ type: AUTH_ACTION.AUTH_REQ_LOGIN });
    // setTimeout(() => {
    //     dispatch({
    //         type: AUTH_ACTION.AUTH_SUCCESS_LOGIN,
    //         token: "token",
    //     })
    //     RNToasty.Success({ title: "Login berhasil" });
    // }, 2000);
    userService.login(username, password).then((res) => {
        const { status, email, token, message } = res;
        if (status == 200) {
            dispatch({
                type: AUTH_ACTION.AUTH_SUCCESS_LOGIN,
                token: token,
            })
            RNToasty.Show({ title: "Login berhasil" });
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