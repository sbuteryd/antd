import React, {Component} from "react";
import {Row,Col} from "antd";
import "./index.less"
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends Component{
    componentWillMount() {
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
           let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData()
    }

    getWeatherAPIData(){
        let city = '厦门'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status ==='success'){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather,
                    city
                })
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎,{this.state.userName}</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col className='breadcrumb-title' span={4}>
                        首页
                    </Col>
                    <Col className='wetaher' span={18}>
                        <span className="date">{this.state.sysTime}</span>
                        <span>
                            {this.state.city}
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}
