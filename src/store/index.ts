import { configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import itemsReducer  from "./slices/itemsSlice";
import modalReducer from "./slices/modalSlice";
import searchReducer from "./slices/searchSlice";
import editReducer from "./slices/editSlice";
import loadReducer from "./slices/loadSlice";

const rootReducer = combineReducers({
    item: itemsReducer,
    modal: modalReducer,
    search: searchReducer,
    edit: editReducer,
    loading: loadReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;