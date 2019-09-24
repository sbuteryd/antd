import React from "react";
import {
    TimePicker,
    DatePicker,
    Radio, Switch,
    Card,
    Form,
    Input,
    Button,
    message,
    Icon,
    Checkbox,
    InputNumber,
    Select,
    Upload
} from 'antd'
import moment from "moment";


class FormRegister extends React.Component{
      handleChange= (value)=> {
        console.log(`selected ${value}`);
    }
    handleSubmit =()=>{
          let userInfo = this.props.form.getFieldsValue()
        console.log(JSON.stringify(userInfo))
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const { Option } = Select;
        const { TextArea } = Input;
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <Form.Item  label="用户"  {...formItemLayout}>
                            {getFieldDecorator('UserName',{
                                initialValue:'',
                                rules:[
                                    {
                                        request:true,
                                        message:'用户名不能为空'
                                    },
                                ]
                            })(<Input  placeholder='请输入用户名'/>)}

                        </Form.Item>
                        <Form.Item label="密码"  {...formItemLayout}>
                            {getFieldDecorator('UserPwd',{
                                initialValue:'',
                            })(<Input type='password'  placeholder='请输入密码'/>)}

                        </Form.Item>
                        <Form.Item label="性别"  {...formItemLayout}>
                            {getFieldDecorator('sex',{
                                initialValue:'1',
                            })(
                                <Radio.Group>
                                    <Radio value='1'>男</Radio>
                                    <Radio value='2'>女</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item label="年龄"  {...formItemLayout}>
                            {getFieldDecorator('age',{
                                initialValue:'1',
                            })(
                                <InputNumber />
                            )}
                        </Form.Item>
                        <Form.Item label="当前状态"  {...formItemLayout}>
                            {getFieldDecorator('slect',{
                                initialValue:'',
                            })(
                                <Select>
                                    <Select.Option key={1} value={1}>
                                       咸鱼一条
                                    </Select.Option>
                                    <Select.Option key={2} value={2}>
                                     风华浪子
                                    </Select.Option>
                                    <Select.Option key={3} value={3}>
                                       北大才子一枚
                                    </Select.Option>
                                    <Select.Option key={4} value={4}>
                                       百度PF
                                    </Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="当前状态"  {...formItemLayout}>
                            {getFieldDecorator('slect',{
                                initialValue:[],
                            })(
                                <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={this.handleChange}>
                                 {children}
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="是否已婚"  {...formItemLayout}>
                            {getFieldDecorator('inMARRIED',{
                                valuePropName:'checked',
                                initialValue:true,
                            })(
                                <Switch/>
                            )}
                        </Form.Item>
                        <Form.Item label="生日"  {...formItemLayout}>
                            {getFieldDecorator('birthday',{
                                initialValue:moment()
                            })(
                                <DatePicker
                                    showTime
                                    format='YYYY-MM-DD HH:mm:ss'
                                />
                            )}
                        </Form.Item>
                        <Form.Item label="联系地址"  {...formItemLayout}>
                            {getFieldDecorator('address',{
                                initialValue:''
                            })(<TextArea  rows={5} />)
                            }
                        </Form.Item>
                        <Form.Item label="早起时间"  {...formItemLayout}>
                            {getFieldDecorator('time',)(<TimePicker/>)
                            }
                        </Form.Item>
                        <Form.Item label="头像"  {...formItemLayout}>
                            {getFieldDecorator('userImg',)(
                                <Upload
                                    listType='picture-card'
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    showUploadList={true}
                                    openFileDialogOnClick={true}
                                >
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>,
                            )
                            }
                        </Form.Item>
                        <Form.Item  {...formItemLayout}>
                            {getFieldDecorator('userImg',)(
                                <Checkbox>我已经阅读过 <a href="#">协议</a> </Checkbox>
                            )
                            }
                        </Form.Item>
                        <Form.Item  {...formItemLayout}>
                            <Button type='primary' onClick={this.handleSubmit}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default  Form.create({ name: 'dynamic_form_item' })(FormRegister);
