import React, {Component} from "react";
import {Card,Button,Radio} from 'antd'
import '../ui.less'

export default class Buttons extends Component{
    state ={
        loading:true,
        size:'default'
    }
    handleCloseLoading = ()=>{
        this.setState(()=>({
            loading:false
        }))
    };
    handleChange =(e)=>{
        this.setState(()=>({
            size:e.target.value
        }))
    }
    render() {
        return (
            <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>Imooc</Button>
                    <Button type='ghost'>Imooc</Button>
                    <Button type='default'>Imooc</Button>
                    <Button type='dashed'>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title='图形按钮' className='card-wrap'>
                    <Button icon='plus'>创建</Button>
                    <Button type='ghost' icon='edit'>编辑</Button>
                    <Button type='default' icon='delete'>删除</Button>
                    <Button type='dashed' shape='circle' icon='search'/>
                    <Button disabled icon='download'>下载</Button>
                </Card>
                <Card title='login 按钮' className='card-wrap'>
                    <Button type='primary' loading={true} loading={this.state.loading}>确定</Button>
                    <Button type='primary'  shape='circle' loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button shape='circle' loading={true}/>
                    <Button type='primary'onClick={this.handleCloseLoading} >关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button  icon='left'>返回</Button>
                        <Button icon='right'>前进</Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button icon='plus' size={this.state.size}>Imooc</Button>
                    <Button type='ghost' size={this.state.size} icon='edit'>Imooc</Button>
                    <Button type='default' size={this.state.size} icon='delete'>Imooc</Button>
                    <Button type='dashed' size={this.state.size} shape='circle' icon='search'/>
                    <Button disabled  size={this.state.size} icon='download'>Imooc</Button>
                </Card>
            </div>
        );
    }
}
