import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from './common/Color';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    largeSpacer: {
        margin: 20
    },
    cardShadowWhiteContent: {
        backgroundColor: '#ffff',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 25,
    },
    btnSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', paddingHorizontal: 10,
        paddingVertical: 5
    },
    cardShadowWhiteHalfWidth: {
        borderRadius: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        width: screenWidth / 2.3,
        paddingHorizontal: 0,
        elevation: 2, shadowColor: colors.gray,
        shadowOpacity: 0.5, shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }
    },
    cardShadowNoRadius: {
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 2, shadowColor: 'grey',
        shadowOpacity: 0.5, shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }
    },
    cardShadowNoRadiusNew: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 2, shadowColor: 'grey',
        shadowOpacity: 0.5, shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }
    },
    imageCardEditProfil: {
        width: screenWidth / 4,
        height: screenWidth / 4,
        backgroundColor: 'transparent',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacersmall: {
        margin: 5,
    },
    paginationCarousel: {
        backgroundColor: colors.transparent,
        height: 70,
        marginTop: -15,
        marginBottom: -15,
        marginLeft: -15,
        justifyContent: 'flex-start',
    },
    searchbarHome: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: colors.smoke,
        borderRadius: 5,
        width: screenWidth - 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        width: screenWidth / 1.25,
        marginLeft: -20,
        height: 45,
        elevation: 0,
        backgroundColor: colors.smoke,
        color: colors.gray,
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
    menuDrawerMain: {
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
    btnContainPrimary: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: screenWidth - 40,
        backgroundColor: colors.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainNeutral: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: screenWidth - 40,
        backgroundColor: colors.lightgray,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainNeutral: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: screenWidth - 40,
        backgroundColor: colors.lightgray,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnOutlineNeutral: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: screenWidth - 40,
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnOutlinePrimary: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: screenWidth - 40,
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnMenuHome: {
        width: screenWidth / 6, borderRadius: (screenWidth / 6) / 2,
        height: screenWidth / 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fa6226'
    },
    // flex direction
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetweenCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowBetweenEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    rowBetweenStart: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    rowBottomAbsoluteBeetwen: {
        width: screenWidth - 80,
        bottom: 10, position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowBottomAbsoluteCenter: {
        width: screenWidth,
        bottom: 10, position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
    },

})