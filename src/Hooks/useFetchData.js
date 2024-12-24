import { useEffect, useState } from "react";

export const useFeetchData = (country) => {
  const [countries, setCountries] = useState([]);
  // i made this mirror array to render it on screen , and the array above will be used for pass the data to region menu because it will always carry the all regions
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalstorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = "https://restcountries.com/v3.1/all";

    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          //Country page
          setCountries(data[0]);
        } else {
          //Homepage
          setCountries(data);
          setFilterCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalstorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));

    if (data) {
      setCountries(data);
      setFilterCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    countries,
    filterCountries,
    setFilterCountries,
    isLoading,
    isError,
  };
};
