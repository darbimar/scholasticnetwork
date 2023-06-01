import { configureStore} from "@reduxjs/toolkit";
import itemsReducer  from "./slices/itemsSlice";
import modalReducer from "./slices/modalSlice";
import searchReducer from "./slices/searchSlice";
import editReducer from "./slices/editSlice";
import loadReducer from "./slices/loadSlice";

export const store = configureStore({
    reducer: {
        item: itemsReducer,
        modal: modalReducer,
        search: searchReducer,
        edit: editReducer,
        loading: loadReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;