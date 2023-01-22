import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/chackout-item/chackout-item.component';

import '../chackout/chackout.style.scss';
import { StripeCheckoutButton } from '../../components/stripe-buttan/stripe-buttan';



const CheckoutPageComponent = ({ cartItems }) => {
  let total = 0;

  cartItems.map(x => {
    total = total + (x.quantity * x.price)
  });
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems ? (
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <div className='total'>TOTAL: ${total}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems

});

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent)

