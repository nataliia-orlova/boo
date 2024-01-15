import { createSlice } from '@reduxjs/toolkit';

// const initialState = localStorage.getItem('cart')
//     ? JSON.parse(localStorage.getItem('cart'))
//     : { cartItems: [] };

// const addDecimals = (num) => {
//     return (Math.round(num * 100) / 100).toFixed(2);
// };

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            let removedProductIndex = state.items.findIndex(
                (item) => action.payload.id === item.id
            );
            state.items.splice(removedProductIndex, 1);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
