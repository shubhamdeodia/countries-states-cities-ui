import { createAction, createReducer } from '@reduxjs/toolkit';
import {
    IAppState,
    IActionValueWP,
    CombinedPayloads,
    ISetDetailsAction,
    ISetDetailsActionWP
} from '../models/store';

export const initialAppState: IAppState = {
    selectedState: '',
    selectedCountry: '',
    selectedCity: '',
    isInfoModalOpen: false,
    selectedDetails: {
        latitude: '',
        longitude: '',
        name: '',
        country_code: '',
        capital: ''
    }
};

const processSelectedCountry = (state: IAppState, action: IActionValueWP) => ({
    ...state,
    selectedCountry: action.payload
});

const processSelectedState = (state: IAppState, action: IActionValueWP) => ({
    ...state,
    selectedState: action.payload
});

const processClearCountry = (state: IAppState) => ({
    ...state,
    selectedCountry: ''
});

const processClearState = (state: IAppState) => ({
    ...state,
    selectedState: ''
});

const processSelectedDetails = (
    state: IAppState,
    action: ISetDetailsActionWP
) => ({
    ...state,
    selectedDetails: {
        ...state.selectedDetails,
        ...action.payload.selectedDetails
    }
});

const processInfoModalToggle = (state: IAppState) => ({
    ...state,
    isInfoModalOpen: !state.isInfoModalOpen
});

export enum Type {
    SET_COUNTRY = 'SET_COUNTRY',
    CLEAR_COUNTRY = 'CLEAR_COUNTRY',
    SET_STATE = 'SET_STATE',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_CITY = 'SET_CITY',
    CLEAR_CITY = 'CLEAR_CITY',
    SET_MODAL_BODY = 'SET_MODAL_DETAILS',
    TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL'
}

// with createReducer
// has no payload
export const clearSelectedCountry = createAction(Type.CLEAR_COUNTRY);
export const clearSelectedState = createAction(Type.CLEAR_STATE);
// export const clearSelectedCity = createAction(Type.CLEAR_CITY);

// Second argument to these type of actionCreator is a function which modifies the payload
// return { pyaload : something }
export const setSelectedCountry = createAction<CombinedPayloads>(
    Type.SET_COUNTRY
);
export const setSelectedState = createAction<CombinedPayloads>(Type.SET_STATE);

export const setSelectedDetails = createAction<ISetDetailsAction>(
    Type.SET_MODAL_BODY
);

export const toggleInfoModal = createAction(Type.TOGGLE_INFO_MODAL);

export const appReducer = createReducer<IAppState>(initialAppState, {
    [Type.SET_COUNTRY]: processSelectedCountry,
    [Type.CLEAR_COUNTRY]: processClearCountry,
    [Type.SET_STATE]: processSelectedState,
    [Type.CLEAR_STATE]: processClearState,
    [Type.SET_MODAL_BODY]: processSelectedDetails,
    [Type.TOGGLE_INFO_MODAL]: processInfoModalToggle
});
