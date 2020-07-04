import React, { Component } from 'react';
import MAINAPP from './navigation';
import Cari from './screens/Cari';
import Login from './screens/Login';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MAINAPP />
            </PersistGate>
        </Provider>
    )
}
export default App;