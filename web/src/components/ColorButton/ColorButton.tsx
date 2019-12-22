import React, { Component } from 'react'
import './ColorButton.css'

class Style {
    width: string;
    height: string;
    fontSize: string;
    backgroundColor: string;
    color: string;
    constructor(width: string, height: string, fontSize: string, backgroundColor: string, color: string) {
        this.width = width;
        this.height = height;
        this.fontSize = fontSize;
        this.backgroundColor = backgroundColor;
        this.color = color;
    }
}

const style1: Style = new Style('150px', '50px', '20px', '#fae379', 'white');
const style2: Style = new Style('150px', '50px', '20px', 'white', '#fae379')

interface Inprop {
    content?: string,
    style1?: object,
    style2?: object
}

interface Instate {
    content?: string,
    style?: object
}

class YellowButton extends Component<Inprop, Instate> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: '',
            style: this.props.style1 ? this.props.style1 : style1
        }
    }

    changeColor1() {
        this.setState({
            style: this.props.style2 ? this.props.style2 : style2
        })
    }

    changeColor2() {
        this.setState({
            style: this.props.style1 ? this.props.style1 : style1
        })
    }

    render() {
        const { content, style1, style2 } = this.props;
        return (
            <button className='yellowbutton' style={this.state.style} onMouseOver={this.changeColor1.bind(this)} onMouseOut={this.changeColor2.bind(this)}>{content}</button>
        )
    }
}

export default YellowButton;