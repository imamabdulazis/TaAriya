import * as React from 'react'
import { View } from "react-native"
import styles from '../styles';

const LargeSpacer = ({ children }) => {
    return <View style={styles.largeSpacer}>{children}</View>
}

export default LargeSpacer;
