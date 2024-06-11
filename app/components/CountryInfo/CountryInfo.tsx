import { CountryData } from "@/types/countries";
import { formattedNumber } from "@/utils";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsContext,
} from "monday-ui-react-core";
import React from "react";

interface CountryInfoProps {
  countryData: CountryData;
}

function CountryInfo({ countryData }: CountryInfoProps) {
  return (
    <div className="">
      <TabsContext>
        <TabList>
          <Tab>
            <h3 className="text-sm font-semibold text-gray-500">
              Identification
            </h3>
          </Tab>
          <Tab>
            <h3 className="text-sm font-semibold text-gray-500">Geography</h3>
          </Tab>
          <Tab>
            <h3 className="text-sm font-semibold text-gray-500">
              Socioeconomics
            </h3>
          </Tab>
          <Tab>
            <h3 className="text-sm font-semibold text-gray-500">
              Communication and timezones
            </h3>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="monday-storybook-tabs_bg-color ">
            <div className="flex flex-col p-4 gap-x-8 gap-y-2">
              <div>
                <h3 className="font-semibold text-gray-600">Name </h3>
                <p className="text-sm text-gray-500">{countryData?.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">
                  International country code{" "}
                </h3>
                <p className="text-sm text-gray-500">
                  {countryData?.internationalCountryCode}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Country code </h3>
                <p className="text-sm text-gray-500">
                  {countryData?.countryCode}
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">
            <div className="flex justify-start p-4 gap-x-8 ">
              <div className="flex flex-col gap-y-2">
                <div>
                  <h3 className="font-semibold text-gray-600">Region </h3>
                  <p className="text-sm text-gray-500">{countryData?.region}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Subregion </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.subregion || "-"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Capital </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.capital || "-"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Location </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.location || "-"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <h3 className="font-semibold text-gray-600">Latitude </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.latitude}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Longitude </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.longitude}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Area </h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.area)} Km²
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">
            <div className="flex justify-start p-4 gap-x-8">
              <div className="flex flex-col gap-y-2">
                <div>
                  <h3 className="font-semibold text-gray-600"> Currency </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.currency}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-600">
                    Currency name{" "}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {countryData?.currency_name}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">
                    Gpd (per capital){" "}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${formattedNumber(countryData?.gpd)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Population </h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.population)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <h3 className="font-semibold text-gray-600"> Birthrate </h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.birthrate)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Deathrate </h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.deathrate)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">
                    Population density{" "}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.populationDensity)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Net migration</h3>
                  <p className="text-sm text-gray-500">
                    {formattedNumber(countryData?.netMigration)}
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">
            <div className="flex">
              <div className="flex flex-col gap-y-2 p-4">
                <div>
                  <h3 className="font-semibold text-gray-600">Url </h3>
                  <p className="text-sm text-gray-500">{countryData?.url}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Phone code</h3>
                  <p className="text-sm text-gray-500">
                    +{countryData?.phone_code}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 p-4 max-h-60 overflow-y-auto">
                <div>
                  <h3 className="font-semibold text-gray-600">Timezones</h3>
                  {countryData.timezones.map((timezone) => (
                    <div key={timezone.zoneName} className="flex flex-col">
                      <p className="text-sm text-gray-500 mb-2">
                        {timezone.zoneName} ({timezone.gmtOffsetName}){" "}
                        {timezone.abbreviation} {timezone.tzName}{" "}
                        {timezone.gmtOffset}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </div>
  );
}

export default CountryInfo;
