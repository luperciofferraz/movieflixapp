import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    button: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.amarelo,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.colors.preto,
    }

})