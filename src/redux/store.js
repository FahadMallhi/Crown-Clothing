
import { configureStore } from "@reduxjs/toolkit";
import userReduser from './reducer/reducer';
import cartReduser from './cart';
// import logger from "react-logger";
// import cart from "./cart";


const store = configureStore({
    reducer: {
        user: userReduser,
        cart: cartReduser
    }
})

export default store;