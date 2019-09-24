import React, {Component} from "react";
import {Card,Row,Col} from 'antd'


export default class Gallery extends React.Component{
    render() {
        const imgs =[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['1.png','2.png','3.png','4.png','5.png']
        ]
        const imgList = imgs.map((list)=>list.map((item)=>(
            <Card
                cover={<img src={`/gallery/${item}`}/>}
            >
                <Card.Meta
                    title='React Admin'
                    description='I Love Imooc'
                />
            </Card>
            )))
        return (
            <div className='card-wrap'>
                <Row>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                </Row>
            </div>
        );
    }
}
