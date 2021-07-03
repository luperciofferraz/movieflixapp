import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "http://192.168.1.69:8080/",
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export async function userToken() {
  const token = await AsyncStorage.getItem("@token");
  return token;
}

export async function getGenres() {
  
  const authToken = await userToken();

  const res = api.get(`/genres?page=0&direction=ASC&orderBy=name`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

export async function getMovies() {
  
  const authToken = await userToken();
  
  const res = api.get(`/movies`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

export async function getMovie(id: number) {
  
  const authToken = await userToken();

  const res = await api.get(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
    
  return res;
}

export async function createReview(data: object) {
  
  const authToken = await userToken();
  
  const res = api.post(`/reviews`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}
