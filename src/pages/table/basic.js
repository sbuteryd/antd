import React from "react";
import {Card,Table} from 'antd'

export default class BasicTable extends React.Component{
    state ={
        dataSource2:[]
    }
    componentDidMount() {
        const dataSouce = [
            {
                id:'0',
                username: "总经理",
                sex:'男',
                state:'ok',
                interest:'跳舞',
                birthday:'1990-01-01',
                address:'厦门市',
                time:'09:00'
            },
            {
                id:'1',
                username:'gem',
                sex:'男',
                state:'ok',
                interest:'跳舞',
                birthday:'1990-01-01',
                address:'厦门市',
                time:'09:00'
            },
            {
                id:'2',
                username:'Jack',
                sex:'男',
                state:'ok',
                interest:'跳舞',
                birthday:'1990-01-01',
                address:'厦门市',
                time:'09:00'
            },
            {
                id:'3',
                username:'Jack',
                sex:'男',
                state:'ok',
                interest:'跳舞',
                birthday:'1990-01-01',
                address:'厦门市',
                time:'09:00'
            },

        ]
        this.setState({
            dataSouce
        })
    }

    render() {
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'username'
            },
            {
                title:'性别',
                dataIndex:'sex'
            },
            {
                title:'状态',
                dataIndex:'state'
            },
            {
                title:'爱好',
                dataIndex:'interest'
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            }

        ]
        return (
            <div>
                <Card title='基础表格'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSouce}
                        pagination={true}
                    />
                </Card>
                <Card title='动态数据渲染表格' style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={true}
                    />
                </Card>
            </div>
        );
    }
}
