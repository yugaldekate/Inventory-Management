import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        SET_IS_SIDEBAR_COLLAPSED: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        SET_IS_DARK_MODE: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const { SET_IS_SIDEBAR_COLLAPSED, SET_IS_DARK_MODE } = globalSlice.actions;

export default globalSlice.reducer;