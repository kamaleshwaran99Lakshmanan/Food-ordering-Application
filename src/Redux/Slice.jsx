import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
    name: 'foodData',
    initialState: {
        food: [],
    },
    reducers: {
        add: (state, action) => {
            state.food.push(action.payload);
        },
    },
});

// Export actions
export const { add } = Slice.actions;

// Export reducer
export default Slice.reducer;
