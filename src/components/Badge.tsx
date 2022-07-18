import { Color, BadgeLabel } from '../types';

interface IBadge {
  color: Color;
  label: BadgeLabel;
  value: number;
}

export const Badge = ({ color, value, label }: IBadge) => {
  return (
    <div className={`badge bg-${color} col-2 p-2`}>{`${label}: ${value}`}</div>
  )
}
