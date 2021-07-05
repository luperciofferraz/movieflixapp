import { StyleSheet } from "react-native";
import { theme, deviceWidth, deviceHeight } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    button: {
        width: '90%',
        backgroundColor: theme.colors.cinzaMedio,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginHorizontal: 15
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