import { api } from "../api";

export const getWeatherByCountry = async (country: string) => {
  try {
    const response = await api.get(`/api/weather`, {
      params: {
        country,
      },
    });
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    throw error;
  }
};
