import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>
};

const styles = StyleSheet.create({
    spacer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 5
    }
});
export default Spacer;