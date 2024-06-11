"use client";
import { useEffect, useState } from "react";
import monday from "../service/modayService";
import { Board, CountryData } from "../types/countries";

const useCountryData = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getListCountry = async () => {
      try {
        const response = await monday.api(`query {
          boards (ids: 6756792083){
            items_page (limit: 250) {
                cursor
              items {
                column_values {
                  id
                  text
                }
                id 
                name  
              }
            }
          }
        }`);

        // mapping the data correctly
        const data = response.data.boards.flatMap((board: Board) =>
          board.items_page.items.map((item) => {
            const timezoneString =
              item.column_values.find((column) => column.id === "timezones")
                ?.text || "";

            let parsedTimezones = [];
            try {
              const correctedJsonString = timezoneString
                .replace(/'/g, '"')
                .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":');
              parsedTimezones = JSON.parse(correctedJsonString);
              if (parsedTimezones.length > 1) {
                console.log(parsedTimezones);
              }
            } catch (error) {
              parsedTimezones = [];
            }

            return {
              name: item.name,
              region:
                item.column_values.find((column) => column.id === "region")
                  ?.text || "",
              subregion:
                item.column_values.find((column) => column.id === "subregion")
                  ?.text || "",
              capital:
                item.column_values.find((column) => column.id === "capital")
                  ?.text || "",
              location:
                item.column_values.find((column) => column.id === "location")
                  ?.text || "",
              internationalCountryCode:
                item.column_values.find((column) => column.id === "iso3")
                  ?.text || "",
              countryCode:
                item.column_values.find((column) => column.id === "iso2")
                  ?.text || "",
              url:
                item.column_values.find((column) => column.id === "tld")
                  ?.text || "",
              phone_code:
                item.column_values.find((column) => column.id === "phone_code")
                  ?.text || "",
              currency:
                item.column_values.find((column) => column.id === "currency")
                  ?.text || "",
              currency_name:
                item.column_values.find(
                  (column) => column.id === "currency_name"
                )?.text || "",
              timezones: parsedTimezones,
              latitude:
                item.column_values.find((column) => column.id === "latitude")
                  ?.text || "",
              longitude:
                item.column_values.find((column) => column.id === "longitude")
                  ?.text || "",
              population:
                item.column_values.find((column) => column.id === "numbers")
                  ?.text || "",
              area:
                item.column_values.find((column) => column.id === "numbers6")
                  ?.text || "",
              populationDensity:
                item.column_values.find((column) => column.id === "numbers2")
                  ?.text || "",
              netMigration:
                item.column_values.find((column) => column.id === "numbers0")
                  ?.text || "",
              gpd:
                item.column_values.find((column) => column.id === "numbers7")
                  ?.text || "",
              birthrate:
                item.column_values.find((column) => column.id === "numbers9")
                  ?.text || "",
              deathrate:
                item.column_values.find((column) => column.id === "numbers8")
                  ?.text || "",
            };
          })
        );

        setCountryData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getListCountry();
  }, []);

  return { countryData, loading, error };
};

export default useCountryData;
