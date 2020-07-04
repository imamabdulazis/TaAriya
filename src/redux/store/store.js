import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from "../reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    // blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);
const persistor = persistStore(store);

export { store, persistor };