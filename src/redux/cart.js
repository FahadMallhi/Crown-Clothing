import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    hidden: true,
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const underAddItemtoCart = state.cartItems.findIndex(x => x.id === action.payload.id);

            if (underAddItemtoCart > -1) {
                state.cartItems[underAddItemtoCart].quantity = state.cartItems[underAddItemtoCart].quantity + 1
            } else {
                state.cartItems = [...state.cartItems, { ...action.payload }];
            }
        },
        clearItemToCart(state, action) {
            const index = state.cartItems.findIndex(x => x.id === action.payload.id);

            if (index > -1) {
                state.cartItems.splice(index, 1)
            }
        },
        removeItemToCart(state, action) {
            const index = state.cartItems.findIndex(x => x.id === action.payload.id);

            if (index > -1) {
                if (state.cartItems[index].quantity === 1) {
                    state.cartItems.splice(index, 1)
                } else {
                    state.cartItems[index].quantity = state.cartItems[index].quantity - 1
                }
            }
        },
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden;
        }
    },
})
export const { addItemToCart, toggleCartHidden, removeItemToCart, clearItemToCart } = CartSlice.actions
export default CartSlice.reducer;