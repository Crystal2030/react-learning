import React from 'react';
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import '../css/pc_header.less';
const logo = require("../images/logo.png");

export default class PCHeader extends React.Component {
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}>
                        <a href="/" class="logo">
                            {/*<img src={logo} alt="logo"/>*/}
                        </a>
                    </Col>
                    <Col span={2}>
                        <Link to="/home">Home</Link>
                    </Col>
                    <Col span={2}>
                        <Link to="/about">About</Link>
                    </Col>
                </Row>
            </header>
        )
    }
}