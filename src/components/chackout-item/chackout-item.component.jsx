import React from 'react';
import cart, { addItemToCart, clearItemToCart, removeItemToCart } from '../../redux/cart';
import store from '../../redux/store';

// import {
//     clearItemFromCart,
//     addItem,
//     removeItem
// } from '../../redux/cart/cart.actions';

import '../chackout-item/chackout-item.style.scss';

const CheckoutItemComponent = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => store.dispatch(removeItemToCart(cartItem))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => store.dispatch(addItemToCart(cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => store.dispatch(clearItemToCart(cartItem))}>
                &#10005;
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     addItemToCart : state.cart.addItemToCart
// });

const CheckoutItem = CheckoutItemComponent

export default CheckoutItem;


// clearItem: item => dispatch(clearItemFromCart(item)),
// addItem: item => dispatch(addItem(item)),
// removeItem: item => dispatch(removeItem(item))
