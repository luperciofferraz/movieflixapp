import { StyleSheet } from "react-native";
import { theme, deviceWidth, deviceHeight } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: theme.colors.cinzaMedio,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 2,

    },

    image: {
        marginTop: 20,
        width: '100%', 
        height: 227, 
    },

    textContainer: {

        paddingHorizontal: 20,

    },

    title: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: theme.colors.branco
    },

    year: {
        
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.015,
        color: theme.colors.amarelo
        
    },

    subtitle: {
        
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: theme.colors.cinzaClaro
        
    },

    button: {
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.borderDetailsColor,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
    },

    buttonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        letterSpacing: -0.015,
        color: theme.colors.branco
    }

})