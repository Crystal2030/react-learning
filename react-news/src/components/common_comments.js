import React from 'react';
import {Row, Col} from 'antd';
import {
    Card,
    notification,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const Tabpane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'


class CommonComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ""
        }
    }

    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    comments: json
                })
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        const myFetchOptions = {
            method: 'GET'
        };
        const formData = this.props.form.getFieldsValue();
        fetch("http://newsapi/gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&comment=" + formData.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.componentDidMount();
            })
    }

    addUserCollection(){
        const myFecthOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + '&uniquekey=' + this.props.uniquekey, myFecthOptions)
            .then(response => response.json())
            .then(json => {
                //收藏成功以后进行一下全局的提醒
                notification['success']({
                    message: 'ReactNews提醒',
                    description: '收藏文章成功'
                })
            })
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length ?
            comments.map((comment, index) => {
                <Card key={index} title={comment.UserName}
                      extra={<a href="#"> 发表于{comment.datetime}</a>}>{comment.Comments}</Card>
            })
            :
            '目前没有用户评论'
        return (
            <div class="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark', {initialValue: ''})(<Input type="textarea"
                                                                                        placeholder="随便评论点"/>)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

CommonComponents = Form.create({})(CommonComponents);
export default CommonComponents;
