import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    
    textInput: {

        backgroundColor: theme.colors.branco,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 13,
        color: theme.colors.cinzaMedioClaro,
        textAlignVertical: 'top',
        marginBottom: 15

    }
});
