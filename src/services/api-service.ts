import axios from "axios";
import { APIResponse } from './apiTypes';

const API_KEY = "3vnuTL0pVT-17LoUEVSEHRwxOv4X1fCpG9MKzgY-vyA";

axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (
  query: string,
  currentPage: number
): Promise<APIResponse> => {
  const response = await axios.get<APIResponse>('/search/photos', {
    params: {
      query: query,
      page: currentPage,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response.data;
};