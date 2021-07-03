import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.cinzaEscuro
    },

    form: {
        marginVertical: 10,
    },

    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },

    toggle: {
        marginLeft: -50,
    },
    
    textInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.cinzaMedio,
        backgroundColor: theme.colors.branco,
        borderRadius: 10,
        padding: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: 41,
        color: theme.colors.branco,
        marginBottom: 50,
        letterSpacing: -0.015
    }

})