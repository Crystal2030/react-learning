var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component{
	componentWillMount() {
		console.log('Index componentWillMount')
	}
	componentDidMount() {
		console.log('Index componentDidMount')
	}
	render() {
		return (
            <div>
                <ComponentHeader/>
                <BodyIndex userid={111} username={"nick"}/>
                <ComponentFooter/>
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('example'));