import { Component } from "react";
import { Link, } from "react-router-dom";

import "./items-menu.style.scss";

export class ItemsMenu extends Component {
    render() {
        return (
            <div className={`${this.props.section.size} items-manu`}>
                <div className='background-image' style={{ backgroundImage: `url(${this.props.section.imageUrl})` }}>
                </div>
                <div className='items-content'>
                    <h1 className='title'>{this.props.section.title.toUpperCase()}</h1>
                    <Link className='sub-titel' to="/shopnow">Shop Now</Link>
                </div>
            </div>
        )
    }
}