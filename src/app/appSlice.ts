import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    showModel:false,
    mainData:null

}

export const reducer = createSlice({
    name: 'config',
    initialState, 
    reducers:{
        setLoading: ( state , action ) => {
            state.loading = action.payload;
        },
        mainToggle: (state, action) => {
          if ( !state.showModel ) {
              state.loading = true
          }
          state.mainData = action.payload
          state.showModel = !state.showModel;
      },
    },
});

export const { setLoading ,mainToggle} = reducer.actions;
export const configuerStore = reducer.reducer