import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name='codepen-circle' size={150} color='red' />
                <View style={{ width: '100%', position: 'absolute', bottom: 15, alignItems: 'center' }}>
                    <ActivityIndicator color='red' size='large' />
                </View>
            </View>
        );
    }
}

export default SplashScreen;
