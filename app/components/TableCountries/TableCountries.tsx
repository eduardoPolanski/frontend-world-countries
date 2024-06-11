"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Search,
} from "monday-ui-react-core";
import useCountryData from "../../../hooks/useCountryData";
import DetailsCountry from "./DetailsCountry";
import { useWeather } from "@/hooks/useWeather";
import { CountryData } from "@/types/countries";
import Error from "../Error/Error";

interface SearchBarProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter }) => (
  <div className="w-1/5">
    <Search
      size="small"
      placeholder="Search"
      value={filter}
      onChange={(e) => setFilter(e)}
    />
  </div>
);

interface CountryRowProps {
  country: CountryData;
  handleOpenModal: (country: CountryData) => void;
}

const CountryRow: React.FC<CountryRowProps> = ({
  country,
  handleOpenModal,
}) => (
  <TableRow key={country.name}>
    <TableCell>{country.name}</TableCell>
    <TableCell>{country.region}</TableCell>
    <TableCell>{country.capital}</TableCell>
    <TableCell>
      <Button
        color={Button.colors.PRIMARY}
        size={"small"}
        onClick={() => handleOpenModal(country)}
      >
        See details
      </Button>
    </TableCell>
  </TableRow>
);

const filterCountries = (
  countries: CountryData[],
  filter: string
): CountryData[] => {
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(filter.toLowerCase()) ||
      country.capital.toLowerCase().includes(filter.toLowerCase()) ||
      country.region.toLowerCase().includes(filter.toLowerCase())
  );
};

const TableCountries: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const { countryData, loading, error } = useCountryData();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );

  const data = useWeather(selectedCountry?.name!);

  const handleCloseModal = () => setModalOpen(false);

  const handleOpenModal = (country: CountryData) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  return (
    <div className="w-full p-2">
      <div className="flex py-2 justify-between items-center">
        <h2 className="text-xl font-semibold">World countries</h2>
        <SearchBar filter={filter} setFilter={setFilter} />
      </div>

      <Table
        dataState={{
          isLoading: loading,
          isError: error,
        }}
        columns={[
          {
            id: "countries",
            loadingStateType: "medium-text",
            title: "Country",
          },
          { id: "region", loadingStateType: "long-text", title: "Region" },
          { id: "capital", loadingStateType: "medium-text", title: "Capital" },
          { id: "Actions", loadingStateType: "medium-text", title: "Actions" },
        ]}
        emptyState={
          <div className="p-4 text-center">
            <p>No countries found.</p>
          </div>
        }
        errorState={<Error title="Failed to load countries" />}
      >
        <TableHeader>
          <TableHeaderCell title="Country" />
          <TableHeaderCell title="Region" />
          <TableHeaderCell title="Capital" />
          <TableHeaderCell title="Actions" />
        </TableHeader>
        <TableBody>
          {filterCountries(countryData, filter).map((country) => (
            <CountryRow
              key={country.name}
              country={country}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </TableBody>
      </Table>

      {selectedCountry && (
        <DetailsCountry
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={`${selectedCountry.name} `}
          weatherData={data.weather}
          countryData={selectedCountry}
          isError={data.error}
          isLoading={data.loading}
        />
      )}
    </div>
  );
};

export default TableCountries;
