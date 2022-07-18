import { Badge } from './Badge';
import { Color, ICountry } from '../types';

interface Iprops {
  country: ICountry;
}

export const CountryItem = ({ country }: Iprops) => {
  return (
    <li className="d-flex align-items-center gap-5 border secondary">
      <img className="col-1 p-1" src={country.flag} alt="flag" />
      <p className="col-2">{country.name}</p>
      <p className="col">{country.capital}</p>
      <p className="col">{country.region}</p>
      <Badge color={Color.Primary} label={'area'} value={country.area} />
      <Badge color={Color.Secondary} label={'population'} value={country.population} />
    </li>
  )
}