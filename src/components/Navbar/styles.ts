import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        paddingBottom: 90,
        flex: 1,
        height: 30,
        backgroundColor: theme.colors.amarelo
    },
    
    textContainer: {
        paddingTop: 60,
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