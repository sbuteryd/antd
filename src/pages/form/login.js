import React from "react";
import {Card, Form, Input, Button, message, Icon, Checkbox} from 'antd'

class FormLogin extends React.Component{
    handleSubmit = ()=>{
       let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.UserName} 恭喜您，当前密码：${userInfo.UserPwd}`)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                russell
                <Card title='登录行内表单'>
                    <Form layout='inline'>
                        <Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary'>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title='登录垂直表单' style={{marginTop:50}}>
                    <Form style={{width:300}}>
                        <Form.Item>
                            {getFieldDecorator('UserName',{
                                initialValue:'',
                                rules:[
                                    {
                                        request:true,
                                        message:'用户名不能为空'
                                    },
                                    {

                                        pattern:new RegExp('^\\w+$','g'),
                                        message:"用户名必须为英文字母"
                                    }

                                ]
                            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('UserPwd',{
                                initialValue:'',
                                rules:[
                                    {
                                        min:5,
                                        message:"最小长度8位"
                                    },
                                    {
                                        pattern:/^\w/g,
                                        message:"密码必须为英文字母加数字"
                                    }
                                ]
                            })(<Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'/>)}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" >忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default  Form.create({ name: 'dynamic_form_item' })(FormLogin);

