const formattedMetricType = (
  metricType: "metric" | "imperial" | null,
  type: "Wind" | "Humidity" | "Feels like"
) => {
  switch (`${metricType}_${type}`) {
    case "metric_Wind":
      return " km/h";
    case "imperial_Wind":
      return " mph";
    case "metric_Humidity":
      return "°C";
    case "imperial_Humidity":
      return "°F";
    case "metric_Feels like":
      return "°C";
    case "imperial_Feels like":
      return "°F";
    default:
      return "%";
  }
};

const formattedDateTime = (date: string) => {
  const dateObject = new Date(date);
  let hour = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  return `${hour}:${minutes} ${ampm}`;
};

const formattedNumber = (number: string) => {
  return Number(number).toLocaleString();
};

export { formattedMetricType, formattedDateTime, formattedNumber };
