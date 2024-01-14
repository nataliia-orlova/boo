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

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const item = action.payload;

//             const existItem = state.cartItems.find((x) => x._id === item._id);

//             if (existItem) {
//                 state.cartItems = state.cartItems.map((x) =>
//                     x._id === existItem._id ? item : x
//                 );
//             } else {
//                 state.cartItems = [...state.cartItems, item];
//             }

//             //  calculate items price
//             state.itemsPrice = addDecimals(
//                 state.cartItems.reduce(
//                     (acc, item) => acc + item.price * item.qty,
//                     0
//                 )
//             );

//             localStorage.setItem('cart', JSON.stringify(state));
//         },
//     },
// });
