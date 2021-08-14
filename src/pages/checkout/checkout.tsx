import React, { FC, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import './checkout.styles.scss';

const CheckoutPage: FC<any> = ({ cartItems, total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    try {
      const result = await stripe?.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement) as StripeCardElement,
      });
      const { error, paymentMethod } = result!;
      error
        ? console.log(
            '%c [JX TEST] - createPaymentMethod Error',
            'background: #222; color: #FF0000',
            error
          )
        : console.log(
            '%c [JX TEST] - createPaymentMethod Success! ',
            'background: #222; color: #bada55',
            paymentMethod
          );
    } catch (error) {
      console.log('[JX TEST] - createPaymentMethod error', error);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="stripe-area">
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || !elements}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<any, any, any>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
