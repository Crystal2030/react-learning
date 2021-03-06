import React from 'react';
export default class ComponentHeader extends React.Component{
    constructor() {
        super();
        this.state={
            miniHeader: false//默认加载的时候还是高的头部（不是mini）
        }
    }
    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    }

    render() {
        const styleComponentHeader = {//这个要在render函数里面写
            header: {
                backgroundColor: "#333",
                color: "#fff",
                paddingTop: (this.state.miniHeader) ? "3px" : "15px",
                paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
            }
            //还可以定义其他的样式
        };
        return (
            <header style={styleComponentHeader.header} class="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}