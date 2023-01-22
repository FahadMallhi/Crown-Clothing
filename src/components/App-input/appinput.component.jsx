import { Component } from "react";

import '../App-input/appinput.style.scss';

export class Appinput extends Component {
    render() {
        return (
            <div className="group">
                <label id={this.props.type}>{this.props.type}</label>
                <input className="app-input" type={this.props.type} id={this.props.type} />
            </div>
        )
    }
}