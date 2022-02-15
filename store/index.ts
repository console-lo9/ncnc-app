<<<<<<< HEAD
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
=======
import {
    combineReducers,
    configureStore,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

interface OptionReducer {
    isOpen: boolean;
}
const optionInitialState: OptionReducer = {
    isOpen: false,
};
const optionSlice = createSlice({
    name: 'option',
    initialState: optionInitialState,
    reducers: {
        changeOpenState(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
});
>>>>>>> 9fff0eda417fbe1e8def62e86373a7da97d77045

const fetchInitialState = {
    fetchData: [],
};

const fetchDataSlice = createSlice({
    name: 'fetch',
    initialState: fetchInitialState,
    reducers: {
        fetch(state, action) {
            state.fetchData = action.payload;
        },
    },
});

interface brandTypes {
    selectedBrand: number;
}

const brandInitialState: brandTypes = { selectedBrand: 0 };
const selectBrandSlice = createSlice({
    name: 'brand',
    initialState: brandInitialState,
    reducers: {
        brand(state, action) {
            state.selectedBrand = action.payload;
        },
    },
});

const rootReducer = combineReducers({
    option: optionSlice.reducer,
    fetch: fetchDataSlice.reducer,
    brand: selectBrandSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: {
            fetch: fetchDataSlice.reducer,
<<<<<<< HEAD
            brand: selectBrandSlice.reducer,
=======
            option: optionSlice.reducer,
>>>>>>> 9fff0eda417fbe1e8def62e86373a7da97d77045
        },
    });

export const optionActions = optionSlice.actions;
export const fetchDataActions = fetchDataSlice.actions;
export const selectBrandActions = selectBrandSlice.actions;

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
