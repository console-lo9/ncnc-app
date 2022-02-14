import {
    combineReducers,
    configureStore,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

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

interface SelectedItemReducer {
    text: string;
}
const selectedItemInitialState: SelectedItemReducer = {
    text: '',
};

const selectedItemSlice = createSlice({
    name: 'text',
    initialState: selectedItemInitialState,
    reducers: {
        changeItemState(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
});
const rootReducer = combineReducers({
    option: optionSlice.reducer,
    selectedItem: selectedItemSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: {
            option: optionSlice.reducer,
            selectedItem: selectedItemSlice.reducer,
        },
    });

export const optionActions = optionSlice.actions;
export const selectedItemActions = selectedItemSlice.actions;

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
