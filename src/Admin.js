import React,{Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import {Row,Col,Button} from "antd";


export default class Admin extends Component {
    render() {
        return (
            <Row>
                <Col span={3}>
                    left
                </Col>
                <Col span={21}>
                    <Header/>
                    <Row>
                        Content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
