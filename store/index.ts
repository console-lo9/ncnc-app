import {
    combineReducers,
    configureStore,
    createSlice,
    Store,
} from '@reduxjs/toolkit';
import { Context, createWrapper, HYDRATE } from 'next-redux-wrapper';
import { BrandType, ConItems } from 'types/items';

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

const rootReducer = combineReducers({
    fetch: fetchDataSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: { fetch: fetchDataSlice.reducer },
    });

export const fetchDataActions = fetchDataSlice.actions;

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
