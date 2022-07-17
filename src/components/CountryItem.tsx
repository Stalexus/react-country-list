import { Badge } from './Badge';
import { Color } from '../types';

export const CountryItem = () => {
  return (
    <li>
      <Badge color={Color.Primary} />
      <Badge color={Color.Secondary} />
    </li>
  )
}
