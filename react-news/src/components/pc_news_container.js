import React from 'react';
import {Row, Col} from 'antd';

import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const carousel1 = require("../images/carousel_1.jpg");
const carousel2 = require("../images/carousel_2.jpg");
const carousel3 = require("../images/carousel_3.jpg");
const carousel4 = require("../images/carousel_4.jpg");

export default class PCNewsContainer extends React.Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div>
                                        <img src={carousel1} alt=""/>
                                    </div>
                                    <div>
                                        <img src={carousel2} alt=""/>
                                    </div>
                                    <div>
                                        <img src={carousel3} alt=""/>
                                    </div>
                                    <div>
                                        <img src={carousel4} alt=""/>
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px" />
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock type="top" count={22} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count={22} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={9} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="112px" />
                            <PCNewsImageBlock count={18} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="112px" />

                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}