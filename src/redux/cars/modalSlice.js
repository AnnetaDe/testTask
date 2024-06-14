import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        modalContent: null,
    },
    selectors: {
        selectIsOpen: (state) => state.isOpen,
        selectModalContent: (state) => state.modalContent,
        
    },
    reducers: {
        openModal(state) {
        state.isOpen = true;
        },
        closeModal(state) {
        state.isOpen = false;
        state.modalContent = null;
        },
        setModalContent(state, { payload }) {
        state.modalContent = payload;
        },
        
        
    },
    
    
    });
    
    export const { openModal, closeModal,setModalContent } = modalSlice.actions;
    export const modalSliceReducer = modalSlice.reducer;
    export const { selectIsOpen, selectModalContent } = modalSlice.selectors;