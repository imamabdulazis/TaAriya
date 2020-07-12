import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <StatusBar backgroundColor={"white"} barStyle='light-content' />
                <Image
                    source={require('../assets/img/obeng.png')}
                    style={{ width: 150, height: 150 }}
                />
                <View style={{ width: '100%', position: 'absolute', bottom: 15, alignItems: 'center' }}>
                    <ActivityIndicator color='orange' size='large' />
                </View>
            </View>
        );
    }
}

const mapStateTopProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateTopProps, mapDispatchToProps)(SplashScreen);
