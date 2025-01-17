import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';
import styles, { screenWidth } from '../../../components/styles';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import SpacerSmall from '../../../components/common/SpacerSmall';
import colors from '../../../components/common/Color';
import textStyles from '../../../components/common/typography';
import { CheckBox } from 'react-native-elements';
import Spacer from '../../../components/common/Spacers';

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerTitle: "Laporan",
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={{ marginHorizontal: 20 }}>
                    <SimpleLineIcons name="menu" size={25} color={'black'} />
                </TouchableOpacity>
            )
        })
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardShadowNoRadius}>
                    <Text style={{ ...textStyles.mediumText, color: colors.gray }}>Dari</Text>
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
                    <Text style={{ ...textStyles.mediumText, color: colors.gray }}>Sampai</Text>
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
                    <CheckBox
                        title='PDF'
                        checked={true}
                    />
                    <CheckBox
                        title='Lihat'
                        checked={this.state.checked}
                    />
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
                        <Text style={{ ...textStyles.mediumTextSemibold, color: colors.white }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Laporan;
