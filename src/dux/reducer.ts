import { createAction, createReducer } from '@reduxjs/toolkit';
import {
    IAppState,
    IActionValueWP,
    CombinedPayloads,
    ISetEntityDataAction,
    ISetEntityDataActionWP
} from '../models/store';

export const initialAppState: IAppState = {
    selectedStateCode: '',
    selectedCountryCode: '',
    isInfoModalOpen: false,
    selectedEntityData: {
        latitude: '',
        longitude: '',
        name: '',
        country_code: '',
        capital: ''
    }
};

const processSelectedCountry = (state: IAppState, action: IActionValueWP) => ({
    ...state,
    selectedCountryCode: action.payload
});

const processSelectedState = (state: IAppState, action: IActionValueWP) => ({
    ...state,
    selectedStateCode: action.payload
});

const processClearCountry = (state: IAppState) => ({
    ...state,
    selectedCountryCode: ''
});

const processClearState = (state: IAppState) => ({
    ...state,
    selectedStateCode: ''
});

const processSelectedEntityData = (
    state: IAppState,
    action: ISetEntityDataActionWP
) => ({
    ...state,
    selectedEntityData: {
        ...state.selectedEntityData,
        ...action.payload.selectedEntityData
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
    SET_ENTITY_DATA = 'SET_ENTITY_DATA',
    TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL'
}

// with createReducer
// has no payload
export const clearSelectedCountry = createAction(Type.CLEAR_COUNTRY);
export const clearSelectedState = createAction(Type.CLEAR_STATE);
// export const clearSelectedCity = createAction(Type.CLEAR_CITY);

// Second argument to these type of actionCreator is a function which modifies the payload
// return { pyaload : something }
export const setSelectedCountryCode = createAction<CombinedPayloads>(
    Type.SET_COUNTRY
);
export const setSelectedStateCode = createAction<CombinedPayloads>(
    Type.SET_STATE
);

export const setSelectedEntityData = createAction<ISetEntityDataAction>(
    Type.SET_ENTITY_DATA
);

export const toggleInfoModal = createAction(Type.TOGGLE_INFO_MODAL);

export const appReducer = createReducer<IAppState>(initialAppState, {
    [Type.SET_COUNTRY]: processSelectedCountry,
    [Type.CLEAR_COUNTRY]: processClearCountry,
    [Type.SET_STATE]: processSelectedState,
    [Type.CLEAR_STATE]: processClearState,
    [Type.SET_ENTITY_DATA]: processSelectedEntityData,
    [Type.TOGGLE_INFO_MODAL]: processInfoModalToggle
});
