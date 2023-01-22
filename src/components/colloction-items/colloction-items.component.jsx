import { Component } from "react";

import '../colloction-items/colloction-items.styles.scss';
import AppButtan from "../App-bottan/appbottan.component";
import store from "../../redux/store";
import { addItemToCart } from "../../redux/cart";

export class ColloctionItems extends Component {
    render() {
        return (
            <div className="collection-item">
                <img className="image" src={this.props.img} alt={this.props.name} />
                <div className="collection-footer">
                    <h3 className="name">{this.props.name}</h3>
                    <p className="price ">${this.props.price}</p>
                </div>
                <AppButtan className="app-button" onClick={() => {
                    store.dispatch(addItemToCart({
                        imageUrl: this.props.img,
                        name: this.props.name,
                        price: this.props.price,
                        quantity: 1,
                        id: this.props.id
                    }))
                }} >Add to cart</AppButtan>
            </div>
        )
    }
}