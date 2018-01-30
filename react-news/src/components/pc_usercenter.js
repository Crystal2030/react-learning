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
    Modal,
    Upload
} from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const Tabpane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            previewImage: '',
            previewVisible: false,
            userCollection: '',
            userComments: ''
        }
    }
    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
            console.log(json);
            this.setState({userCollection: json});
        });

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({userComments: json});
            });

    }
    handleCancel() {
        this.setState({
            previewVisible: false,
        });
    }
    render() {
        const props = {
            action: 'http://newsapi/gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage: file.url, previewVisible: true});
            }
        };
        const {userCollection, userComments} = this.state;
        const userCollectionList = userCollection.length ?
            userCollection.map((uc, index) => (
                <Card key={index} title={uc.uniquekey} extra={<Link target="_blank" to={`/details/${uc.uniquekey}`}>查看</Link>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            "您还没有任何收藏内容！";
        const userCommentList = userComments.length ?
            userComments.map((comment, index) => (
                <Card key={index} title={`于${comment.datetime}评论了文章${comment.uniquekey}`} extra={<Link target="_blank" to={`/details/${comment.uniquekey}`}>查看</Link>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            "您还没有发表任何评论！";
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <Tabpane tab="我的收藏列表" key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {userCollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </Tabpane>
                            <Tabpane tab="我的评论" key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {userCommentList}
                                        </Col>
                                    </Row>
                                </div>
                            </Tabpane>
                            <Tabpane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"/>
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null}
                                           onCancel={this.handleCancel.bind(this)}>
                                        <img src={this.state.previewImage} alt="预览"/>
                                    </Modal>
                                </div>
                            </Tabpane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}