import { formattedDateTime } from "@/utils";
import { ButtonGroup } from "monday-ui-react-core";
import Image from "next/image";
import React, { useState } from "react";
import WeatherData from "../DataWeather/DataWeather";
import { ResponseWeather } from "@/types/weather";
import { SunIcon, ThermometerIcon, WindIcon } from "../Icons/Icons";

interface WeatherCondition {
  icon: string;
}

interface CurrentWeatherData {
  condition: WeatherCondition;
  is_day: number;
  temp_c: number;
  temp_f: number;
}

interface LocationData {
  localtime: string;
  name: string;
  country: string;
}

interface CurrentWeatherProps {
  weatherData: ResponseWeather;
  metricType: "metric" | "imperial";
}

function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  const gradientClass = weatherData?.current.is_day
    ? "from-sky-200 to-sky-600"
    : "from-slate-400 to-slate-800";

  const toggleMetricType = (value: "metric" | "imperial") => {
    setMetricType(value === "metric" ? "imperial" : "metric");
  };

  const [metricType, setMetricType] = useState<"metric" | "imperial">("metric");

  return (
    <>
      <div
        className={`flex flex-col shadow-lg bg-gradient-to-b ${gradientClass} rounded-t-xl text-white p-4`}
      >
        <div className="flex justify-between">
          <div>
            <h2>Current Weather</h2>
            <p>{formattedDateTime(weatherData.location.localtime)}</p>
          </div>

          <div className="inline-flex lg:justify-start justify-center">
            <ButtonGroup
              onSelect={(value) =>
                toggleMetricType(value as "metric" | "imperial")
              }
              options={[
                {
                  text: "Imperial",
                  value: "imperial",
                },
                {
                  text: "Metric",
                  value: "metric",
                },
              ]}
              value={"imperial"}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            height={64}
            width={64}
            className="rounded-full"
            src={`https:${weatherData.current.condition.icon}`}
            alt="Weather Icon"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-3xl">
            {weatherData.current[
              `temp_${metricType === "metric" ? "c" : "f"}`
            ].toFixed(0)}
            °{metricType === "metric" ? "C" : "F"}
          </p>
          <h2 className="text-xl font-bold">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-8 bg-slate-200 rounded-b-xl shadow-xl">
        <WeatherData
          weatherCurrent={weatherData.current[
            `wind_${metricType === "metric" ? "kph" : "mph"}`
          ].toFixed(2)}
          description="Wind"
          icon={WindIcon}
          metricType={metricType}
        />
        <WeatherData
          weatherCurrent={String(weatherData.current.humidity)}
          description="Humidity"
          icon={SunIcon}
          metricType={null}
        />
        <WeatherData
          weatherCurrent={String(
            weatherData.current[
              `feelslike_${metricType === "metric" ? "c" : "f"}`
            ].toFixed(0)
          )}
          description="Feels like"
          metricType={metricType}
          icon={ThermometerIcon}
        />
      </div>
    </>
  );
}

export default CurrentWeather;
