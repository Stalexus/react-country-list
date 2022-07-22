import { FlowFlags } from "typescript";

export type BadgeLabel = 'area' | 'population';

export interface ICountry {
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

export interface ICountryApi {
    capital: string[];
    population: number;
    region: string;
    area: number;
    name: ICountryNameApi;
    flags: ICountryFlagsApi;
}

interface ICountryNameApi {
    common: string;
    official: string;
    nativeName: {
        [key: string]:
        | {
            common: string;
            official: string;
        }
        | undefined;
    }
}

interface ICountryFlagsApi {
    [key: string]: string
}