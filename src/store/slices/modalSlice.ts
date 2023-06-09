import { createSlice } from "@reduxjs/toolkit";


interface ModalState {
    isShow: boolean;
    isEdit: boolean;
    isDelete: boolean
}

const initialState: ModalState = {
    isShow: false,
    isEdit:false, 
    isDelete: false
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
        showEditForm(state) {
            state.isEdit = true;
        },
        hideEditForm(state) {
            state.isEdit = false;
        },
        showDeleteModal(state) {
            state.isDelete = true;
        },
        hideDeleteModal(state) {
            state.isDelete = false;
        },

    }
})


export const {showForm, hideForm, showEditForm, hideEditForm, showDeleteModal, hideDeleteModal} = modalSlice.actions;

export default modalSlice.reducer;