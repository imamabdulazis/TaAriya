import React, { Component } from 'react';
import MAINAPP from './navigation';
import Cari from './screens/Cari';
import Login from './screens/Login';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const App = () => {
    return (
        <Provider store={store}>
            <MAINAPP />
        </Provider>
    )
}
export default App;