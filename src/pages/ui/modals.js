import React, {Component} from "react";
import {Card,Button,Modal,message,Spin,Icon,notification} from 'antd'
import './ui.less'

export default class Buttons extends React.Component{
    state = {
        visible: false,
        visible1:false,
        spinning:true
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    loading = (e)=>{
        console.log(e.target)
        console.log("russell")
        this.setState({
            spinning: false
        })
    }
    info = () => {
        message.info('This is a normal message',3);
    };

    openNotification = () => {
        notification.success({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    render() {
        const antIcon = <Icon type="fullscreen-exit" style={{ fontSize: 24 }} spin />;


        return (
            <div >
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Button type="primary" onClick={this.showModal}>
                  second
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible1}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <div>
                    <Button content='russell' type="primary" onClick={this.info}>
                        test
                    </Button>
                </div>
                <div>
                    <Spin size='large' spinning={this.state.spinning}/>
                    <button onClick={this.loading}>click</button>
                </div>
                <Spin wrapperClassName='li' tip="加载中" indicator={antIcon} />
                <Button type="primary" onClick={this.openNotification}>
                    Open the notification box
                </Button>,
            </div>
        );
    }
}
