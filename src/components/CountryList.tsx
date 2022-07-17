import { Icountry } from '../types'
import { CountryItem } from './CountryItem';

interface Iprops {
  countries: Icountry[];
}

export const CountryList = ({ countries }: Iprops) => {
  return (
    <ul>
      {countries.map(country => {
        return (
          <CountryItem key={country.name} />
        );
      })}
    </ul>
  );
};
