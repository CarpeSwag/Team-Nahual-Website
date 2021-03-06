import {Component} from 'inferno';
import {Link, NavLink} from 'inferno-router';

export default class NavbarTop extends Component {
	constructor(props) {
		super(props);
		this.refresh = this.refresh.bind(this);
	}
	
	refresh() {
		this.props.update();
	}
	
	render() {
		return (
			<div className='navbar-top'>
				<div className='left'>
					<Link to="/" exact>
						<div onclick={this.refresh} className='team-nahual option'>Team Nahual</div>
					</Link>
				</div>
				<div className='right'>
					<NavLink to="/" exact activeClassName="active">
						<div onclick={this.refresh} className='option'>Juanito el Nahualito</div>
					</NavLink>
					<NavLink to="/about-us" activeClassName="active">
						<div onclick={this.refresh} className='option'>Meet the Team</div>
					</NavLink>
				</div>
			</div>
		);
	}
}