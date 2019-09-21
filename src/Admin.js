import React,{Component} from "react";
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import {Row,Col,Button} from "antd";
import './style/common.less'




export default class Admin extends Component {
    render() {
        return (
            <Row className='container'>
                <Col className='nav-left' span={4}>
                    <NavLeft/>
                </Col>
                <Col clasName='main' span={20}>
                    <Header/>
                    <Row className='content'>
                        Content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
