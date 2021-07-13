import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    reviewCard: {
        backgroundColor: theme.colors.cinzaMedio,
        borderRadius: 20,
        marginBottom: 30,
        paddingBottom: 15
    },

    reviewTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.015,
        color: theme.colors.branco,
        marginTop: 15,
        marginLeft: 25,
        marginRight: 15
    },

    movieReviewsAutor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 40,
    },

    movieReviewsStarImage: {
        marginRight: 15
    },

    movieReviewsAutorName: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: theme.colors.branco
    },

    movieReviewsText: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        alignItems: 'center',
        letterSpacing: -0.015,
        color: theme.colors.cinzaMedioClaro,
        borderRadius: 15,
        borderColor: theme.colors.borderDetailsColor,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginHorizontal: 22,
        marginTop: 5,
        paddingVertical: 15
    }

})