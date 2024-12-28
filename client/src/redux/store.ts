import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { api } from "./features/api";
import globalReducer from "@/redux/features/globalSlice";

/* REDUX PERSISTENCE */
const createNoopStorage = () => {
    return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        removeItem(_key: any) {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window === "undefined"
        ? createNoopStorage()
        : createWebStorage("local");

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["global"],
};

const rootReducer = combineReducers({
    global: globalReducer,
    [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(api.middleware),
    });
};

/* REDUX TYPES */
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;    