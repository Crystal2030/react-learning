import React from 'react';
import {Menu, Icon, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import '../css/pc.less';
const logo = require("../images/logo.png");

export default class PCFooter extends React.Component {
    constructor() {
        super();
        this.state={
            current: 'top'
        }
    }
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={20} class="footer">
                       @copy;&nbsp;2018 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </footer>
        )
    }
}