import { CountryList } from './components/CountryList';
import countries from './data/country-data.json';
import { Icountry } from './types';

export const App = () => {
  const trasformedCountries: Icountry[] = countries.map((country): Icountry => ({
    flag: country.flags.svg,
    name: country.name.common,
    capital: country.capital[0],
    region: country.region,
    area: country.area,
    population: country.population,
  })
  )
  return (
    <div>
      <CountryList countries={trasformedCountries} />
    </div>
  );
}