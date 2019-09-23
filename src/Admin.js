import React,{Component} from "react";
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import {Row,Col,Button} from "antd";
import './style/common.less'
import Home from '../src/pages/home/'




export default class Admin extends Component {
    render() {
        return (
            <Row className='container'>
                <Col className='nav-left' span={4}>
                    <NavLeft/>
                </Col>
                <Col className='main' span={20}>
                    <Header/>
                    <Row className='content'>
                        {/*<Home/>*/}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
