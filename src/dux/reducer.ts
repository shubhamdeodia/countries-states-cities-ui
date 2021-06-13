import { createAction, createReducer } from '@reduxjs/toolkit';
import { IAppState, IAction, CombinedPayloads } from '../models/store';

export const initialAppState: IAppState = {
    selectedState: '',
    selectedCountry: '',
    selectedCity: ''
};

const processSelectedCountry = (state: IAppState, action: IAction) => ({
    ...state,
    selectedCountry: action.payload
});

const processSelectedState = (state: IAppState, action: IAction) => ({
    ...state,
    selectedState: action.payload
});

const processSelectedCity = (state: IAppState, action: IAction) => ({
    ...state,
    selectedCity: action.payload
});

const processClearCountry = (state: IAppState) => ({
    ...state,
    selectedCountry: ''
});

const processClearState = (state: IAppState) => ({
    ...state,
    selectedState: ''
});

const processClearCity = (state: IAppState) => ({
    ...state,
    selectedCity: ''
});

export enum Type {
    SET_COUNTRY = 'SET_COUNTRY',
    CLEAR_COUNTRY = 'CLEAR_COUNTRY',
    SET_STATE = 'SET_STATE',
    CLEAR_STATE = 'CLEAR_STATE',
    SET_CITY = 'SET_CITY',
    CLEAR_CITY = 'CLEAR_CITY'
}

// with createReducer
// has no payload
export const clearSelectedCountry = createAction(Type.CLEAR_COUNTRY);
export const clearSelectedState = createAction(Type.CLEAR_STATE);
export const clearSelectedCity = createAction(Type.CLEAR_CITY);

// Second argument to these type of actionCreator is a function which modifies the payload
// return { pyaload : something }
export const setSelectedCountry = createAction<CombinedPayloads>(
    Type.SET_COUNTRY
);
export const setSelectedState = createAction<CombinedPayloads>(Type.SET_STATE);
export const setSelectedCity = createAction<CombinedPayloads>(Type.SET_CITY);

export const appReducer = createReducer<IAppState>(initialAppState, {
    [Type.SET_COUNTRY]: processSelectedCountry,
    [Type.CLEAR_COUNTRY]: processClearCountry,
    [Type.SET_STATE]: processSelectedState,
    [Type.CLEAR_STATE]: processClearState,
    [Type.SET_CITY]: processSelectedCity,
    [Type.CLEAR_CITY]: processClearCity
});

// with createSlice

// export const counterSlice = createSlice({
//     name: 'count',
//     initialState: initialCounterState,
//     reducers: {
//         incrementCountByOne: processIncrement,
//         decrementCountByOne: processDecrement,
//         incrementByValue: processIncrementBy,
//         decrementByValue: processDecrementBy,
//     },
// });

// const { reducer } = counterSlice;

// const {
//     incrementCountByOne, decrementCountByOne, incrementByValue, decrementByValue,
// } = counterSlice.actions;

// export {
//     reducer as counterReducer, incrementCountByOne,
//     decrementCountByOne, incrementByValue, decrementByValue,
// };
