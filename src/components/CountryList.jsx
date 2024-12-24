import React from "react";
import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ data }) => {
  return (
    <div className="mt-8 grid items-center justify-between gap-x-[10px] gap-y-12 md:grid-cols-[repeat(2,minmax(0,_1fr))] lg:grid-cols-[repeat(4,minmax(0,_1fr))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};

export default CountryList;
