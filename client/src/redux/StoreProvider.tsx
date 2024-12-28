"use client"

import { useRef } from "react";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PersistGate } from "redux-persist/integration/react";

import { AppStore, store } from "./store";

/* PROVIDER */
export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>(null);

    if (!storeRef.current) {
        storeRef.current = store();
        setupListeners(storeRef.current.dispatch);
    }

    const persistor = persistStore(storeRef.current);
  
    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}