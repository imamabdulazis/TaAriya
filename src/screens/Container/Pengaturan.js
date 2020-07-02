import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../components/styles';
import LargeSpacer from '../../components/common/LargeSpacer';

const Pengaturan = (props) => {
    props.navigation.setOptions({
        headerTitle: "Pengaturan"
    })
    return (
        <View style={styles.container}>
            <LargeSpacer>
                <Text>Pengaturan</Text>
            </LargeSpacer>
        </View>
    );
}

export default Pengaturan;
