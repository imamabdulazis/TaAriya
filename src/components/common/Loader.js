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
import colors from './Color';

export default function Loader({
  title = 'Loading...'
}) {
  return (
    <Modal
      transparent>
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          backgroundColor: colors.white,padding:10,borderRadius:5
        }}>
          <ActivityIndicator color={colors.black} size='small' />
          <Text style={{ color: colors.black, fontSize: 14 }}>{title}</Text>
        </View>
      </View>
    </Modal>
  )
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