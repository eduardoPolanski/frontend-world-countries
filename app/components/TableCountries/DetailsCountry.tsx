import React from "react";
import {
  Divider,
  Loader,
  Modal,
  ModalContent,
  ModalFooterButtons,
} from "monday-ui-react-core";
import { ResponseWeather } from "@/types/weather";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CountryInfo from "../CountryInfo/CountryInfo";
import { CountryData } from "@/types/countries";
import Error from "../Error/Error";

interface DetailsCountryProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  weatherData: ResponseWeather | null;
  isError: boolean;
  isLoading: boolean;
  countryData: CountryData;
}

function DetailsCountry({
  isOpen,
  onClose,
  title,
  weatherData,
  isError,
  isLoading,
  countryData,
}: DetailsCountryProps) {
  return (
    <Modal
      show={isOpen}
      onClose={onClose}
      title={title}
      contentSpacing
      id="story-book-modal"
      width={"60vw"}
    >
      <ModalContent>
        <div className="w-full h-1">
          <Divider />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader size={40} />
          </div>
        ) : (
          <div className="flex flex-col rounded-b-xl py-2 px-2 shadow-xl ">
            <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-y-4 my-4">
              <div id="current-weather" className="w-full flex flex-col">
                {isError || !weatherData ? (
                  <div className="flex justify-center items-center pt-4 min-h-max">
                    <Error title="Weather data" />
                  </div>
                ) : (
                  <div className="">
                    <CurrentWeather
                      weatherData={weatherData}
                      metricType="metric"
                    />
                  </div>
                )}
              </div>
              <div
                id="info_country"
                className="flex flex-col bg-slate-200 rounded-xl shadow-xl "
              >
                <CountryInfo countryData={countryData} />
              </div>
            </div>
          </div>
        )}
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={onClose}
        primaryButtonText="Close"
      />
    </Modal>
  );
}

export default DetailsCountry;
