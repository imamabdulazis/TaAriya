import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    divRowBetwen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    divRowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardShadowWhiteSmallLEftPadding2: {
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 20,
        paddingHorizontal: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2
    },
    drawerContent: {
        flex: 1,
        height: Dimensions.get('screen').height - 84, padding: 10
    },
    menuDrawer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    menuTitleStyle: {
        fontWeight: '300',
        fontSize: 14,
        color: "#000",
        paddingLeft: 15
    },

})