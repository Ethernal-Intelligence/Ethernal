import React from 'react'
import Header from '../../components/Header/Header'
import './memberPage.css'
import project from "../../assets/images/logo/project.png"
import homework from "../../assets/images/logo/homework.png"
import dongtai from "../../assets/images/logo/dongtai.png"
import { withRouter } from 'react-router-dom'

class page2 extends React.Component {
    click2(event){
        this.props.history.push("/page2");
    }
    click3(event){
        this.props.history.push("/page3");
    }
    render() {
        return (
            <div className="Main">
                <Header
                    headerimg="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580904756372&di=702a75c3f4fa58721c8eb92bf969beff&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg"
                    name="hello"
                ></Header>
                <div className="space"></div>
                <div className="tabbar">
                    <div className="turnButton" ><img src={project}></img></div>
                    <div className="turnButton" oncliclk={this.click2}><img src={homework}></img></div>
                    <div className="turnButton" oncliclk={this.click3}><img src={dongtai}></img></div>
                </div>
                <div className="peopleContent">

                </div>
            </div>
        )
    }
}

export default page2
