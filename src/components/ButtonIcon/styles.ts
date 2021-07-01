import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    button: {
        width: 290,
        height: 50,
        backgroundColor: theme.colors.amarelo,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.colors.preto,
        marginLeft: 80
    },

    arrowContainer: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.cinzaBotao,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },

})