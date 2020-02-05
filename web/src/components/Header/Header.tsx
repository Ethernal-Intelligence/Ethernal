import React, { Component } from 'react'
import './Header.css'

interface people {
    headerimg: string;
    name: string;
}

interface message {
    message: number
}

class Header extends Component<people, message>{
    constructor(props: any) {
        super(props);
        this.state = {
            message: 0
        }
    }
    render() {
        return (
            <div className="Header">
                <div>
                    <img className="headerImg" src={this.props.headerimg}></img>
                    <span className="headerName">{this.props.name}</span>
                </div>
                <div className="headerRing">
                    <img className="ringImage" src="https://www.z4a.net/images/2020/02/05/ring.png"></img>
                    <div className="message">{this.state.message}</div>
                </div>
            </div>
        )
    }

}

export default Header;