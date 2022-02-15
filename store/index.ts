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
    option: optionSlice.reducer,
    fetch: fetchDataSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: {
            fetch: fetchDataSlice.reducer,
            option: optionSlice.reducer,
        },
    });

export const optionActions = optionSlice.actions;
export const fetchDataActions = fetchDataSlice.actions;

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
