import React from 'react';
import {Menu, Icon, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import '../css/mobile.less';
const logo = require("../images/logo.png");

export default class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"/>
                    <span>Mobile News</span>
                </header>
            </div>
        )
    }
}