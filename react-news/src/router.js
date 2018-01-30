import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';

if (module.hot) {
    module.hot.accept();
}

class Index extends React.Component {
    componentWillMount() {
        console.log('----------Index componentWillMount----------')
    }

    componentDidMount() {
        console.log('----------Index componentDidMount----------')
    }

    render() {
        return (
            <div>
                {/*pc端*/}
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router>
                        <div>
                            <Route exact path='/' component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}/>
                            <Route path="/usercenter" component={PCUserCenter}/>
                        </div>
                    </Router>
                </MediaQuery>
                {/*移动端*/}
                <MediaQuery query="(max-device-width: 1224px)">
                    <Router>
                        <div>
                            <Route exact path='/' component={MobileIndex}></Route>
                            <Route path="/details/:uniquekey" component={MobileNewsDetails}/>
                            <Route path="/usercenter" component={MobileUserCenter}/>
                        </div>
                    </Router>
                </MediaQuery>
            </div>

        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
);
