import axios from "axios";
import { userToken } from './auth';

export const api = axios.create({
  baseURL: "http://192.168.1.69:8080/",
});

export async function getGenres() {
  
  const res = api.get(`/genres`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return res;
}

export async function getMovies() {
  
  const authToken = await userToken();
  
  const res = api.get(`/movies`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return res;
}

export async function getMovie(id: number) {
  
  const authToken = await userToken();

  const res = await api.get(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
    
  return res;
}

export async function createReview(data: object) {
  
  const authToken = await userToken();
  
  const res = api.post(`/reviews`, data, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return res;
}
