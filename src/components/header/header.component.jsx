import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
// import { getAuth } from "firebase/auth";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import logo from '../../assets/images/logo.svg';
import { auth } from "../../sheared/firebase/auth";
// import selectCurrentUser from '../../redux/reducer/reducer';
// import selectCartHidden from '../../redux/cart';

import '../header/header.style.scss';



export class HeaderComponent extends Component {
    render() {
        return (
            <div className="logo">
                <div className="logostyle">
                    <Link to="/">
                        <img src={logo} alt={logo} />
                    </Link>
                </div>
                <div className="options">
                    <Link className="option" to='/shopnow'> SHOP</Link>
                    <Link className="option" to='/contact'> CONTACT</Link>

                    {this.props.user ? (
                        <div className="option" onClick={() => auth.signOut()} to="/Authentication">
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className="option" to="/Authentication">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                    {this.props.hidden ? null : <CartDropdown />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    hidden: state.cart.hidden,
});

export const Header = connect(mapStateToProps)(HeaderComponent);