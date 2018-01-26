import React from 'react';
import '../lib/autosize'

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import "./css/reset.less";


export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}