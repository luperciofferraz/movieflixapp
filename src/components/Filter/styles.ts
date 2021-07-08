import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
    pickerContainer: {

        backgroundColor: theme.colors.cinzaMedio,
        borderRadius: 10,
        padding: 20
    },

    pickerBorder: {

        backgroundColor: theme.colors.cinzaMedio,
        borderWidth: 1,
        borderColor: theme.colors.borderDetailsColor,
        borderRadius: 10,
        padding: 2

    },

    picker: {

        backgroundColor: theme.colors.cinzaMedio,
        borderWidth: 1,
        borderColor: theme.colors.branco,
        color: theme.colors.branco,

    }

})