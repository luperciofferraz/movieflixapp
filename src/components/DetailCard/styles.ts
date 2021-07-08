import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        
        backgroundColor: theme.colors.cinzaMedio,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 2,
        marginBottom: 20

    },

    title: {
        
        marginHorizontal: 25,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.015,
        color: theme.colors.branco

    },


    image: {

        marginTop: 20,
        width: '100%', 
        height: 227, 

    },

    textContainer: {

        paddingHorizontal: 25,

    },

    year: {
        
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.015,
        color: theme.colors.amarelo
        
    },

    subtitle: {
        
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: theme.colors.cinzaMedioClaro
        
    },

    sinopseTitle: {

        marginTop: 15,
        marginHorizontal: 25,
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.015,
        color: theme.colors.branco

    },

    sinopseContainer: {
        
        marginTop: 7,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: theme.colors.borderDetailsColor,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 15
    },

    sinopseText: {

        marginTop: 13,
        marginBottom: 13,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: theme.colors.cinzaMedioClaro

    }
})