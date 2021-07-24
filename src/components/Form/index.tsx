import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'; 
import Toast from "react-native-tiny-toast";
import { makePrivateRequest } from '../../services/requests';
import { useForm, Controller } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { getSessionData } from '../../services/requests';
import { Review } from '../../types';
import { TextArea } from '../../components/TextArea';
import { styles } from './styles';
import { Button } from '../Button';

export type ReviewData = {
    text: string;
    movieId: number;
    userId?: number;
}

type ParamsType = {
    movieId: string;
}

type ParamsForm = {
    listaReviews: Review[] | undefined;
    setListaReviews: Function;
}

let listaRetorno: Review[];

export function Form( {listaReviews, setListaReviews}: ParamsForm) {

    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    async function onSubmit(data: ReviewData) {

        reset({
          text: '',
        });

        const { userId } = await getSessionData();
        
        data.movieId = parseInt(movieId);
        data.userId = userId;

        if (data.text.trim().length === 0) {
        
          Toast.show("Não há Avaliação para ser salva!");

        }
        else {

          await sendReview(data);

        }
    };

    async function sendReview(data: ReviewData) {

      makePrivateRequest({ url: '/reviews', method: 'POST', data })
  
      .then(response => {
          
        listaRetorno = [];
        listaRetorno.push(response.data);
        listaReviews?.forEach(review => listaRetorno.push(review));
        setListaReviews(listaRetorno);
        Toast.showSuccess("Avaliação salva com sucesso!");
        
      }).catch(response => { 
        
        Toast.show("Erro ao salvar Avaliação!");

      });

    }

    return (

      <View style={styles.container}>

        <Controller
          control={control}
          rules={{
            maxLength: 300
          }}
          render={({ field: { onChange, value } }) => (
            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="text"
          defaultValue=""
        />
        
        {errors.review && <Text>This is required.</Text>}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        
        <Button 
          handleOnPress={handleSubmit(onSubmit)}
          text="SALVAR AVALIAÇÃO"
        />

        </KeyboardAvoidingView>

      </View>
  );
};
