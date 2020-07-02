import * as React from 'react'
import styles from '../styles';
import { View } from 'react-native';

const SpacerSmall = ({ children }) => {
    return <View style={styles.spacersmall}>{children}</View>
}

export default SpacerSmall;
