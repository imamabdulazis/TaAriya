import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../components/styles';
import ToggleSwitch from 'toggle-switch-react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LargeSpacer from '../../components/common/LargeSpacer';
import colors from '../../components/common/Color';
import { Divider } from 'react-native-paper';

const Pengaturan = (props) => {
    props.navigation.setOptions({
        headerTitle: "Pengaturan"
    })
    return (
        <View style={styles.container}>
            <LargeSpacer>
                <View style={styles.btnSetting}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SimpleLineIcons name="volume-2" size={20} color={colors.black} style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 12, paddingVertical: 10, fontFamily: 'SFProDisplay-Regular', color: colors.orange }}>Notifikasi</Text>
                    </View>
                    <ToggleSwitch
                        isOn={true}
                        onColor={colors.orange}
                        offColor={colors.gray}
                        // size=''
                        onToggle={() => { }}
                    />
                </View>
                <Divider />
            </LargeSpacer>
        </View>
    );
}

export default Pengaturan;
