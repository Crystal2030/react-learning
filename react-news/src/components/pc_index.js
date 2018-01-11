import React from 'react';
import Home from './home';
import PCHeader from './pc_header';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <Home/>
            </div>
        )
    }
}