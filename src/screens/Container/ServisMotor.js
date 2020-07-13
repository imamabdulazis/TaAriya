import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity } from 'react-native';
import styles, { screenWidth } from '../../components/styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SpacerSmall from '../../components/common/SpacerSmall';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../components/common/Color';
import textStyles from '../../components/common/typography';
import Spacer from '../../components/common/Spacers';

class ServisMotor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.props.navigation.setOptions({
            headerTitle: "Servis Motor"
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
                            placeholder="Masukkan servis"
                            style={{ width: screenWidth / 1.4, color: colors.black }}
                            underlineColorAndroid={colors.gray}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.divRowStart}>
                        <SpacerSmall />
                        <TextInput
                            placeholder="Merk Motor"
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

export default ServisMotor;
