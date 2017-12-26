import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

import "antd/dist/antd.css";
import {Input} from 'antd';

const defaultProps = {//定义默认的prop值
    username: '这是一个默认的用户名'
}
export default class BodyIndex extends React.Component{
    constructor(){
        super();
        this.state = {//初始化赋值
            username: 'crystal',
            age: 20
        }
    }
    changeuserInfo() {
        this.setState({age: 50});
        //第一种方式
        // var mySubmitButton = document.getElementById('submitButton');
        // console.log(mySubmitButton);
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

        //第二种方式 推荐使用
        console.log(this.refs.submitButton)
        this.refs.submitButton.style.color = 'green';
        MixinLog.log();
    }
    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    }
    render() {
        // setTimeout(()=>{
        //     this.setState({username: 'mooc', age: 30})
        // },3000)
        return (
           <div>
               username： {this.state.username} <br/>
               age： {this.state.age} <br/>
               <Input placeholder="antd basic usage"/>
               <input type="button" id="submitButton" ref="submitButton" value="提交" onClick={this.changeuserInfo.bind(this)}/>
               <p>从父组件传递过来的值 userid: {this.props.userid}   username:{this.props.username}</p>
               <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
           </div>
        )
    }
}

BodyIndex.propTypes = {
    // userid: React.PropTypes.number.isRequired
}
BodyIndex.defaultProps =  defaultProps;

ReactMixin(BodyIndex.propTypes, MixinLog);