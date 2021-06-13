export type CountryPayload = string;
export type StatePayload = string;
export type CityPayload = string;

export type CombinedPayloads = CountryPayload | StatePayload | CityPayload;

export type IAction = {
    payload: CombinedPayloads;
};

export interface IAppState {
    selectedState: string | null;
    selectedCountry: string | null;
    selectedCity: string | null;
}
