import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route,Switch} from 'react-router-dom';
import PCIndex from './components/pc_index';
import Home from './components/home';
import About from './components/about';


class Index extends React.Component{
    componentWillMount() {
        console.log('Index componentWillMount')
    }
    componentDidMount() {
        console.log('Index componentDidMount')
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route component={PCIndex}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
);
