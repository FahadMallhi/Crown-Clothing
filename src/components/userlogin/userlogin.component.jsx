import { Component } from "react";

export class Userlogin extends Component {
    render() {
        {console.log(this.props)}
        return <>
            {this.props.userlogin && <button >{this.props.userlogin.displayName}</button>}
        </>
    }
}