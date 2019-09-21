import React, {Component} from "react";
import MenuConfig  from '../../config/menuConfig'
import './index.less'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;

export default class NavLeft extends Component{
    componentWillMount() {
        const menuTreeNode  =  this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <Menu.Item to={item.key}>{item.title}</Menu.Item>
            </Menu.Item>

        })


    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Iooc MS</h1>
                </div>
                <Menu theme={"dark"}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
//
// const style ={
//    title:{
//        background:'red'
//    }
// }
