import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({

    container: {
        marginTop: getStatusBarHeight(),
        paddingBottom: 70,
        flex: 1,
        backgroundColor: theme.colors.amarelo
    },
    
    textContainer: {
        paddingTop: 35,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: theme.colors.preto,
    },

    textSair: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        letterSpacing: -0.015,
        color: theme.colors.preto,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.preto,
        paddingHorizontal: 20
    }
})