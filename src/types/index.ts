export type BadgeLabel = 'area' | 'populatipon';

export interface Icountry {
    name: string;
    capital: string;
    population: number;
    flag: string;
    area: number;
    region: string;
}

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Light = 'light bg-dark',
    Dark = 'dark',
}