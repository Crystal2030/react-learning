import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route,Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

if (module.hot) {
    module.hot.accept();
}

class Index extends React.Component{
    componentWillMount() {
        console.log('----------Index componentWillMount----------')
    }
    componentDidMount() {
        console.log('----------Index componentDidMount----------')
    }
    render() {
        return (
            <div>
                {/*<HashRouter>
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route component={PCIndex}></Route>
                </Switch>
            </HashRouter>*/}
                {/*pc端*/}
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex/>
                </MediaQuery>
                {/*移动端*/}
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>

        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
);
