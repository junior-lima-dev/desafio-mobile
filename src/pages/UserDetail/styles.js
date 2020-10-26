import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Constants.statusBarHeight + 20
    },

    goBack:{
        alignItems: 'flex-end'
    },  

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black'
    },

    card: {
        flex:1,
        padding: 24,
        backgroundColor: "#fff",
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        alignItems: 'center',
    },

    imageArea: {
        flex:1
    },

    textArea: {
        flex:1,
        alignItems: 'center',
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 6
    },

    titleUserLogin: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 30
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10
    }
});