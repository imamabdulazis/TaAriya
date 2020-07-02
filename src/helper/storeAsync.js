import AsyncStorage from '@react-native-community/async-storage';

const storeAsync = async () => {
    let user = await AsyncStorage.getItem('user');

    return {
        user,
    }
}

export default storeAsync;