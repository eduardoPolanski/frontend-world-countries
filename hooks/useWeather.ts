"use client";
import { useState, useEffect } from "react";
import { getWeatherByCountry } from "../service/weatherService";

export const useWeather = (country: string | null) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setWeather(null);
        if (!country) {
          throw new Error("Country not found");
        }
        const { status, data } = await getWeatherByCountry(country);
        if (status !== 200) {
          throw new Error("Error fetching weather data");
        }
        setError(false);
        setWeather(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [country]);

  return { weather, loading, error };
};
