import { createSlice } from "@reduxjs/toolkit"


export type EditItem = {
    id: string,
    name: string, 
    price: number,
    description: string
}



const initialState: EditItem = {
    id: '',
    name: '', 
    price: 0,
    description: ''
}

export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        correctItem(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.description = action.payload.description;
        }
    }
})

export const {correctItem} = editSlice.actions;

export default editSlice.reducer;


