import React,{Component} from "react"
import { Carousel,Card } from 'antd';

import './ui.less'


export default class CarouselList extends Component{
    render() {
        return (
            <div>
                <Card title='首页'>
                    <Carousel  autoplay='true'  className='carousel'>
                        <div>
                            <img src="/assets/gallery/1.png" alt=""/>
                        </div>
                        <div>
                            <img src="/assets/gallery/2.png" alt=""/>
                        </div>
                        <div>
                            <img src="/assets/gallery/3.png" alt=""/>
                        </div>
                        <div>
                            <img src="/assets/gallery/4.png" alt=""/>
                        </div>
                    </Carousel>,
                </Card>

            </div>
        );
    }
}


