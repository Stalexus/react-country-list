import { ICountry } from '../types'
import { CountryItem } from './CountryItem';

interface Iprops {
  countries: ICountry[];
}

export const CountryList = ({ countries }: Iprops) => {
  return (
    <ul>
      {countries.map(country => {
        return (
          <CountryItem key={country.name} country={country} />
        );
      })}
    </ul>
  );
};
