import React, {Component} from "react";
import {Card,Row,Col,Modal} from 'antd'
import './ui.less'

export default class Gallery extends React.Component{
    state = {
        visible:false
    }
    openGallery =(imgSrc)=>{
        this.setState({
            visible:true,
            currentImge:`/assets/gallery/${imgSrc}`
        })
    }

    render() {
        const imgs =[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['1.png','2.png','3.png','4.png','5.png']
        ]
        const imgList = imgs.map((list)=>list.map((item)=>(
            <Card
                hoverable='true'
                cover={
                    <img src={`/assets/gallery/${item}
                    `}
                         onClick={()=>this.openGallery(item)}
                    />}

            >
                <Card.Meta
                    title='React Admin'
                    description='I Love Imooc'
                />
            </Card>
            )))
        return (
            <div className='card-wrap'>
                <Row gutter={24}>
                    <Col span={6}>
                        {imgList[0]}
                    </Col>
                    <Col span={6}>
                        {imgList[1]}
                    </Col>
                    <Col span={6}>
                        {imgList[2]}
                    </Col>
                    <Col span={6}>
                        {imgList[3]}
                    </Col>
                </Row>
                <Modal
                    title='图片'
                    width={'50%'}
                    height={'50%'}
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImge} style={{width:'100%'}} alt=""/>}
                </Modal>
            </div>
        );
    }
}
