import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.cinzaEscuro
    },

    textContainer: {
        marginTop: 40,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.branco,
        marginBottom: 50
    },

    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: theme.colors.subtitle,
        marginBottom: 50
    
    }

})