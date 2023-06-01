import { createSlice } from "@reduxjs/toolkit"
import { getItemsFromLS } from "../../utils/getItemsFromLS"


export type ListItem = {
    id: string,
    name: string, 
    price: string,
    description: string
}


interface IItems  {
    items: ListItem[]
}


const initialState: IItems = {
    items: getItemsFromLS()
}

export const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items = [...state.items, action.payload];
        },
        editItem(state, action) {
        const { id, editName, editPrice, editDescription } = action.payload;
        let name = editName;
        let price = editPrice;
        let description = editDescription;

        state.items = state.items.map(item => {
            if(item.id !== action.payload.id){
                return item;
            }
            return {
            ...item, name, price, description
            };
        });
        },
        deleteItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        }

    }
})

export const {addItem, editItem, deleteItem} = itemsSlice.actions;

export default itemsSlice.reducer;


