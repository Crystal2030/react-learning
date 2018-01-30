import React from 'react';
import {Menu, Icon, Modal, Tabs, message, Form, Input, Button, Checkbox, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import '../css/mobile.less';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const logo = require("../images/logo.png");

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: "",
            userid: 0
        }
    }
    componentWillMount() {
        if(localStorage.userid!='') {
            this.setState({
                hasLogined: true,
                userNickName: localStorage.userNickName,
                userId: localStorage.userid
            })
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    }

    handleClick(e) {
        if (e.key == 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit(e) {
        //页面开始想API进行提交数据
        e.preventDefault();
        let myFetchOptions = {
            method: 'GET'
        };
        let {getFieldsValue} = this.props.form;
        let formData = getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action +"&username=" +formData.username + "&password=" +formData.password + "&" + "r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword)
            .then( response => response.json())
            .then(json => {
                console.log('------->', json);
                this.setState({
                    userNickName: json.NickUserName,
                    userid: json.UserId
                });
                localStorage.userid= json.UserId;
                localStorage.userNickName = json.NickUserName;

                if(this.state.action == "login") {
                    this.setState({
                        hasLogined: true
                    });
                }
            })
        message.success("请求成功!");
        this.setModalVisible(false);
    }
    callback(key) {
        if(key == 1) {
            this.setState({
                action: 'login'
            })
        } else if (key == 2) {
            this.setState({
                action: 'register'
            })
        }
    }
    login() {
        this.setModalVisible(true);
    }
    render() {
        let {getFieldDecorator} = this.props.form;
        console.log('1111111',this.state.hasLogined)
        const userShow = this.state.hasLogined ?
            <Link to={`/usercenter`}>
                <Icon type="inbox" />
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)} />
        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"/>
                    <span>Mobile News</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                       onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}
                       okText="关闭">
                    <Tabs type="card" onchange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName', {})
                                    (<Input placeholder="请输入您的账号"/>)
                                    }
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', {})
                                    (<Input type="password" placeholder="请输入您的密码"/>)
                                    }
                                </FormItem>

                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName', {})
                                    (<Input placeholder="请输入您的账号"/>)
                                    }
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', {})
                                    (<Input type="password" placeholder="请输入您的密码"/>)
                                    }
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword', {})
                                    (<Input type="password" placeholder="请再次输入您的密码"/>)
                                    }
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

MobileHeader = Form.create({})(MobileHeader);
export default MobileHeader;