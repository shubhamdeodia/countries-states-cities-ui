export type CountryPayload = string;
export type StatePayload = string;
export type CityPayload = string;

export type CombinedPayloads = CountryPayload | StatePayload | CityPayload;

export type ISelectedEntityData = {
    name: string | null;
    latitude: string | null;
    longitude: string | null;
    country_code: string | null;
    capital?: string | null;
};

export type IActionValueWP = {
    payload: CombinedPayloads;
};

export interface ISetEntityDataActionWP {
    payload: ISetEntityDataAction;
}

export interface ISetEntityDataAction {
    selectedEntityData: ISelectedEntityData;
}

export interface IAppState {
    selectedStateCode: string | null;
    selectedCountryCode: string | null;
    isInfoModalOpen: boolean;
    selectedEntityData?: ISelectedEntityData;
}
