import React from 'react';
var footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
    render() {
        console.log('----->',footerCss);
        return (
            <footer class={footerCss.miniFooter}>
                <h1>这里是底部</h1>
            </footer>
        )
    }
}