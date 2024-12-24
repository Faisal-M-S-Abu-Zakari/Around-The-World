import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const handelChange = (e) => {
    console.log(e); // to know what is inside it
    const region = e.label;
    // it will store the all region or the selected random region
    // i write the all region because it doesn't exist in api
    const filterList =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filterCountriesList(filterList);
  };
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={handelChange}
      //   here i use classNames not className to access to internal classes , from the docs you can show
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        // the siprate line before the arrow , if you enable it , it will appear
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
};

export default RegionMenu;
