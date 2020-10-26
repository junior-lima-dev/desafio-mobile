import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16
    },

    usersList: {
        marginTop: 32,
    },

    users: {
        padding: 24,
        backgroundColor: "#fff",
        marginBottom: 16,
        borderRadius: 8,
    },

    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    userLogin: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 6
    }
});