import { createSlice } from "@reduxjs/toolkit";


interface ModalState {
    isShow: boolean;
    isEdit: boolean
}

const initialState: ModalState = {
    isShow: false,
    isEdit:false
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showForm(state) {
            state.isShow = true;
        },
        hideForm(state) {
            state.isShow = false;
        },
        editForm(state) {
            state.isEdit = true;
        },
        createForm(state) {
            state.isEdit = false;
        }
    }
})


export const {showForm, hideForm, editForm, createForm} = modalSlice.actions;

export default modalSlice.reducer;