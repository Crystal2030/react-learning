import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';

export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }

    //页面加载完再加载数据
    componentDidMount() {
        console.log('news detail============>', this.props.match.params.uniquekey)
        const myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            console.log(json);
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    }

    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader></MobileHeader>
                <div className="ucmobileList">
                <Row>
                    <Col span={24} class="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <CommonComments uniquekey={this.props.match.params.uniquekey}></CommonComments>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop></BackTop>
                </div>
            </div>
        )
    }
}