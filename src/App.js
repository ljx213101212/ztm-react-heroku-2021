import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components//header/header';
import {
  addWindowEventListeners,
  removeWindowListener,
} from './utils/windowEventListener';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Auth from './firebase/auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

class App extends Component {
  componentDidMount() {
    addWindowEventListeners();
  }

  componentWillUnmount() {
    removeWindowListener();
  }

  render() {
    return (
      <div className="App">
        <Auth />
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
          </BrowserRouter>
        </Elements>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(App);
