import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';
import styles, { screenWidth } from '../../components/styles';
import SpacerSmall from '../../components/common/SpacerSmall';
import textStyles from '../../components/common/typography';
import colors from '../../components/common/Color';
import Spacer from '../../components/common/Spacers';

class BodyRepair extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.navigation.setOptions({
            headerTitle: "Body Repair"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardShadowNoRadius}>
                    <View style={styles.divRowStart}>
                        <SimpleLineIcons name="calendar" size={15} color={'black'} />
                        <SpacerSmall />
                        <TextInput
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            value={`${moment().format('DD, MMM YYYY')}`}
                            underlineColorAndroid={colors.gray}
                            editable={false}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Jenis Repair"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Jenis Motor"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Kelas , contoh: standar"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Nomor telepon"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Nama"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <TouchableOpacity style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: screenWidth - 70,
                        backgroundColor: colors.primary,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ ...textStyles.mediumTextSemibold, color: colors.white }}>Booking Servis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default BodyRepair;
