import { RNToasty } from "react-native-toasty";
import storeAsync from "../../helper/storeAsync";
import AsyncStorage from '@react-native-community/async-storage';

const { AUTH_ACTION } = require("../../utils/Constants");


export const login = (username, password) => dispatch => {
    dispatch({
        type: AUTH_ACTION.AUTH_REQ_LOGIN,
    });

    if (username === 'ariya' && password === '123') {
        setTimeout(() => {
            dispatch({
                type: AUTH_ACTION.AUTH_SUCCESS_LOGIN,
                payload: username
            })
            RNToasty.Success({ title: "Login berhasil" });
            AsyncStorage.setItem('user', username)
        }, 1500);
    } else {
        setTimeout(() => {
            dispatch({
                type: AUTH_ACTION.AUTH_FAILED_LOGIN
            })
            RNToasty.Error({ title: 'Username atau password salah.' })
        }, 1500)
    }
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: AUTH_ACTION.AUTH_CLEAR_LOGIN,
    })
    await AsyncStorage.removeItem('user');
}

export const checkSession = () => async (dispatch) => {
    const store = await storeAsync();
    let user = store.user;
    dispatch({
        type: AUTH_ACTION.AUTH_LOADING_SESSION,
    });
    if (store.user !== null) {
        dispatch({
            type: AUTH_ACTION.AUTH_SUCCESS_LOGIN,
            payload: store.user
        });
    }
}