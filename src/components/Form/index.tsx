import React from 'react';
import { View, Button, Text } from 'react-native'; 
import { makePrivateRequest } from '../../services/requests';
import { useForm, Controller } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { getSessionData } from '../../services/auth';
import { Review } from '../../types';
import { TextArea } from '../../components/TextArea';

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

    const { control, handleSubmit, formState: { errors } } = useForm();
    const route = useRoute();
    const { movieId } = route.params as ParamsType;

    async function onSubmit(data: ReviewData) {

        const { userId } = await getSessionData();

        data.movieId = parseInt(movieId);
        data.userId = userId;

        makePrivateRequest({ url: '/reviews', method: 'POST', data })
        .then(response => 
        {
                listaRetorno = [];
                listaReviews?.map(review => listaRetorno.push(review));
                listaRetorno.push(response.data);
                setListaReviews(listaRetorno);
        }).catch(response => { console.log('ERRO') });

    };

    return (

      <View>

      <Controller
        control={control}
        rules={{
         maxLength: 100,
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

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

    </View>
  );
};
