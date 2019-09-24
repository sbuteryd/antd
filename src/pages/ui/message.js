import React, {Component} from "react";
import {Card,Button,Modal,message,Spin,Icon,notification} from 'antd'
import './ui.less'

export default class Message extends React.Component{
    showMessage =(type)=>{
        message[type]("恭喜你，React课程晋级成功")
    }
    render() {
        return (
            <div>
                russell
                <Card title="全局提示框" className="card-wrap">
                    <Button type='primary'
                            onClick={()=>this.showMessage('success')}
                    >
                        Success
                    </Button>
                    <Button
                        onClick={()=>this.showMessage('info')}>
                        Info
                    </Button>
                    <Button
                        onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button
                        onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button
                        onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}
