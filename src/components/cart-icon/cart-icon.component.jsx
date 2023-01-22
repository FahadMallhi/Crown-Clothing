import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart';
// import { selectCartItemsCount } from '../../redux/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart';
import store from '../../redux/store';

import './cart-icon.style.scss';

const CartIconComponent = ({ itemCount }) => (
  <div className='cart-icon' onClick={() => store.dispatch(toggleCartHidden())}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({ itemCount: state.cart.cartItems.length })

const CartIcon = connect(mapStateToProps)(CartIconComponent)

export default CartIcon;