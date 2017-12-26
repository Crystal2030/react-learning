import React from 'react';
export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
                <p>
                    我是从父页面bodyindex获取的值：username: {this.props.username}
                </p>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange} /></p>
            </div>
        )
    }
}