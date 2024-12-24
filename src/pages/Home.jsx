import ShowMessage from "../components/ShowMessage";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";

import { useFeetchData } from "../Hooks/useFetchData";

const Home = () => {
  const { isError, isLoading, countries, setFilterCountries, filterCountries } =
    useFeetchData();
  return (
    <>
      {isLoading && <ShowMessage message={"Loading..."} />}
      {isError && <ShowMessage message={"Error fetching data"} />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={countries}
              filterCountriesList={setFilterCountries}
            />
            <RegionMenu
              countriesList={countries}
              filterCountriesList={setFilterCountries}
            />
          </div>
          <CountryList data={filterCountries} />
        </>
      )}
    </>
  );
};

export default Home;
