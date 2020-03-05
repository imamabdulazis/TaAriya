import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226' }}>
                <StatusBar backgroundColor={"#fa6226"} barStyle='light-content' />
                <AntDesign name='codepen-circle' size={150} color='#fff' />
                <View style={{ width: '100%', position: 'absolute', bottom: 15, alignItems: 'center' }}>
                    <ActivityIndicator color='#fff' size='large' />
                </View>
            </View>
        );
    }
}

export default SplashScreen;
