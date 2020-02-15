import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  Modal
} from 'react-native';
import Spacer from './Spacers';

export default class Loader extends Component<{}> {
  render() {
    return (
      <Modal
        transparent>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="#ffffff" size="large" />
            <Text style={{ color: '#ffff', fontFamily: 'SFProDisplay-Medium', fontSize: 14 }}>Loading.......</Text>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    zIndex: 99,
    justifyContent: "center",
    alignItems: 'center'
  }
});