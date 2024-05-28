import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            let removedProductIndex = state.cartItems.findIndex(
                (item) => action.payload.id === item.id
            );
            state.cartItems.splice(removedProductIndex, 1);
        },
    },
});

export const selectTotalPrice = (state) => {
    let total = 0;
    const priceArray = state.cart.cartItems.map((item) => item.price) ?? [];

    if (priceArray.length) {
        total = priceArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
    }

    if (total > 0) {
        return total.toFixed(2);
    } else {
        return 0;
    }
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
