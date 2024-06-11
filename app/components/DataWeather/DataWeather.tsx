import React from "react";
import { IconProps } from "../Icons/Icons";
import { formattedMetricType } from "@/utils";

function WeatherData({
  weatherCurrent,
  description,
  icon,
  metricType,
}: {
  weatherCurrent: string;
  description: "Wind" | "Humidity" | "Feels like";
  icon: React.FC<IconProps>;
  metricType: "metric" | "imperial" | null;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-4 ">
      {icon({ size: 24, color: "gray" })}
      <div className="flex flex-col items-center justify-center mt-1">
        <h2 className="text-gray-500">{description}</h2>
        <p className="text-sm text-gray-500">
          {weatherCurrent}
          {formattedMetricType(metricType || null, description)}
        </p>
      </div>
    </div>
  );
}

export default WeatherData;
