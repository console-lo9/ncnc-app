import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

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
    fetch: fetchDataSlice.reducer,
    brand: selectBrandSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: {
            fetch: fetchDataSlice.reducer,
            brand: selectBrandSlice.reducer,
        },
    });

export const fetchDataActions = fetchDataSlice.actions;
export const selectBrandActions = selectBrandSlice.actions;

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
