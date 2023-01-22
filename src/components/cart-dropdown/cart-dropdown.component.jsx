import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart';
import store from '../../redux/store';

import AppButtan from '../App-bottan/appbottan.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdownComponent = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown' >
    <div className='cart-items' >
      {cartItems && cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Link to={"/checkout"}>
    <AppButtan
      onClick={() => {
        CartItem.push('/checkout');
        store.dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </AppButtan>
    </Link>
  </div>

);

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems })

const CartDropdown = connect(mapStateToProps)(CartDropdownComponent)

export default CartDropdown;