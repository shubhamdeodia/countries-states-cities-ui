export type CountryPayload = string;
export type StatePayload = string;
export type CityPayload = string;

export type CombinedPayloads = CountryPayload | StatePayload | CityPayload;

export type SelectedDetails = {
    name: string | null;
    latitude: string | null;
    longitude: string | null;
    country_code: string | null;
    capital?: string | null;
};

export type IActionValueWP = {
    payload: CombinedPayloads;
};

export interface ISetDetailsActionWP {
    payload: ISetDetailsAction;
}

export interface ISetDetailsAction {
    selectedDetails: SelectedDetails;
}

export interface IAppState {
    selectedState: string | null;
    selectedCountry: string | null;
    selectedCity: string | null;
    isInfoModalOpen: boolean;
    selectedDetails?: SelectedDetails;
}
