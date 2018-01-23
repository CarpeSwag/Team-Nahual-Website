import Inferno from 'inferno';
import Component from 'inferno-component';
import NavbarTop from './components/NavbarTop';
import Parallax from './components/Parallax';
import MainContents from './components/MainContents';

export default class Index extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stylesheet: 'index',
		};
	}
	
	render() {
		return (
			<div id='inferno-root'>
				<NavbarTop />
				<Parallax />
				<MainContents />
				<link rel="stylesheet" type="text/css" href={"css/" + this.state.stylesheet + ".css"} />
			</div>
		);
	}
}

Inferno.render(
	<Index />,
	document.getElementById('root')
);
