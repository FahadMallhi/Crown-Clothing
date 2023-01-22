import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components';
import { Footer } from './components/footer/footer.component';
import { Authentication, Home, Shopnow, Contact } from './pages';
import { CheckoutPage } from './pages/chackout/chackout.page';
import { currentUser } from './redux/reducer/reducer';
import store from './redux/store';
import { auth } from './sheared/firebase/auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({
        user,
      });

      store.dispatch(currentUser(user))
    })
  }
  render() {
    { console.log('App.js') }
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopnow" element={<Shopnow />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/authentication" element={<Authentication user={this.state.user} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;