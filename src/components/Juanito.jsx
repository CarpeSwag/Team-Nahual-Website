import {Component} from 'inferno';
import Parallax from './Parallax';
import sml_act1_1 from '../res/screenshots/sml/act1_1.png';
import sml_act1_2 from '../res/screenshots/sml/act1_2.png';
import sml_act1_3 from '../res/screenshots/sml/act1_3.png';
import sml_act1_4 from '../res/screenshots/sml/act1_4.png';
import sml_act1_5 from '../res/screenshots/sml/act1_5.png';
import sml_act1_6 from '../res/screenshots/sml/act1_6.png';
import sml_act1_7 from '../res/screenshots/sml/act1_7.png';
import sml_act2_1 from '../res/screenshots/sml/act2_1.png';
import sml_act2_2 from '../res/screenshots/sml/act2_2.png';
import sml_act2_3 from '../res/screenshots/sml/act2_3.png';
import sml_act2_4 from '../res/screenshots/sml/act2_4.png';
import sml_act2_5 from '../res/screenshots/sml/act2_5.png';
import sml_act2_6 from '../res/screenshots/sml/act2_6.png';
import sml_act2_7 from '../res/screenshots/sml/act2_7.png';
import sml_act3_1 from '../res/screenshots/sml/act3_1.png';
import sml_act3_2 from '../res/screenshots/sml/act3_2.png';
import sml_act3_3 from '../res/screenshots/sml/act3_3.png';
import sml_act3_4 from '../res/screenshots/sml/act3_4.png';
import sml_act3_5 from '../res/screenshots/sml/act3_5.png';
import lrg_act1_1 from '../res/screenshots/lrg/act1_1.png';
import lrg_act1_2 from '../res/screenshots/lrg/act1_2.png';
import lrg_act1_3 from '../res/screenshots/lrg/act1_3.png';
import lrg_act1_4 from '../res/screenshots/lrg/act1_4.png';
import lrg_act1_5 from '../res/screenshots/lrg/act1_5.png';
import lrg_act1_6 from '../res/screenshots/lrg/act1_6.png';
import lrg_act1_7 from '../res/screenshots/lrg/act1_7.png';
import lrg_act2_1 from '../res/screenshots/lrg/act2_1.png';
import lrg_act2_2 from '../res/screenshots/lrg/act2_2.png';
import lrg_act2_3 from '../res/screenshots/lrg/act2_3.png';
import lrg_act2_4 from '../res/screenshots/lrg/act2_4.png';
import lrg_act2_5 from '../res/screenshots/lrg/act2_5.png';
import lrg_act2_6 from '../res/screenshots/lrg/act2_6.png';
import lrg_act2_7 from '../res/screenshots/lrg/act2_7.png';
import lrg_act3_1 from '../res/screenshots/lrg/act3_1.png';
import lrg_act3_2 from '../res/screenshots/lrg/act3_2.png';
import lrg_act3_3 from '../res/screenshots/lrg/act3_3.png';
import lrg_act3_4 from '../res/screenshots/lrg/act3_4.png';
import lrg_act3_5 from '../res/screenshots/lrg/act3_5.png';

const optionTitle = ['Story', 'Explore', 'Nahual'];
const optionText = ["Juanito el Nahualito is a story that takes places in current time. A story about a teenager named Juanito. Juanito lives with his grandfather who migrated to the city from his village to take care of his grandson. Juanito Was given to his grandfather to take care of him as his Mother tries to provide from another city. Juanito grows up with his grandfather who used to tell stories to Juanito about his heritage and roots. As Juanito grows up to be a teen, he stops believing his grandfather about those stories. At the age of 16, Juanito has an internal conflict of who he is. Juan (the grandfather) falls ill and asks Juanito to help him. As Juanito tries to help his grandfather, his grandfather leaves mysteriously. Juanito then decides to follow him and loses him in the forest. Juanito falls and faints in the forest; this is where he discovers a power that his grandfather once told him as story/fable.", "The look and feel of the Juanito el Nahualito is a reference to wood carving that tells a story and Mesoamerican oral tradition of storytelling. Magical Realism is applied to tell a coming-of-age story.", "In Mesoamerican cultures like Aztecs, Mayans, Zapotecs, and Mixtecs, the shaman or priest was known as the nahual. According to tradition, the nahuales could transform into animals and penetrate with their soul the body of an animal or natural phenomena. By adopting these appearances, these nahuales performed their prodigious actions. The nahual is the animal that gives us its characteristics soon after our birth. It is told that we all are born with a nahual, which is the animal that is born at the same time as we are."];
const ACT_1_SCREENSHOTS = 7;
const ACT_2_SCREENSHOTS = 7;
const ACT_3_SCREENSHOTS = 5;
const IMAGE_ROTATION_TIMER = 2500;

const SML_ACT = [
	[sml_act1_1, sml_act1_2, sml_act1_3, sml_act1_4, sml_act1_5, sml_act1_6, sml_act1_7],
	[sml_act2_1, sml_act2_2, sml_act2_3, sml_act2_4, sml_act2_5, sml_act2_6, sml_act2_7],
	[sml_act3_1, sml_act3_2, sml_act3_3, sml_act3_4, sml_act3_5]
];
const LRG_ACT = [
	[lrg_act1_1, lrg_act1_2, lrg_act1_3, lrg_act1_4, lrg_act1_5, lrg_act1_6, lrg_act1_7],
	[lrg_act2_1, lrg_act2_2, lrg_act2_3, lrg_act2_4, lrg_act2_5, lrg_act2_6, lrg_act2_7],
	[lrg_act3_1, lrg_act3_2, lrg_act3_3, lrg_act3_4, lrg_act3_5]
];


export default class Juanito extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			opt: 0,
			act: 0,
			currScreenshot: 0,
			screenshotMax: ACT_1_SCREENSHOTS,
			doNotRotate: false,
			isLightboxOpen: false
		};
		
		this.explore = this.explore.bind(this);
		this.nahual = this.nahual.bind(this);
		this.story = this.story.bind(this);
		this.act1 = this.act1.bind(this);
		this.act2 = this.act2.bind(this);
		this.act3 = this.act3.bind(this);
		
		this.toggleLightbox = this.toggleLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		
		this.screenshotForward = this.screenshotForward.bind(this);
		this.screenshotBackward = this.screenshotBackward.bind(this);
		this.autoRotate = this.autoRotate.bind(this);
		
		setTimeout(this.autoRotate, IMAGE_ROTATION_TIMER);
	}
	
	renderTitles() {
		let fun = [this.story, this.explore, this.nahual];
		let opts = [];
		for (let i = 0; i < optionTitle.length; ++i) {
			let className = (i == this.state.opt)? "selected": "";
			opts.push(
				<div onClick={fun[i]}
					className={className}>
					{optionTitle[i]}
				</div>
			);
		}
		
		return opts;
	}
	
	renderText() {
		return optionText[this.state.opt];
	}
	
	renderActs() {
		let fun = [this.act1, this.act2, this.act3];
		let opts = [];
		for (let i = 0; i < fun.length; ++i) {
			let className = (i == this.state.act)? "selected": "";
			opts.push(
				<div onClick={fun[i]}
					className={className}>
					{"Act " + (i + 1)}
				</div>
			);
		}
		
		return opts;
	}
	
	selectOption(opt) {
		this.setState({opt: opt});
	}
	
	selectAct(act) {
		let ssCount = 1;
		switch(act) {
			case 0:
				ssCount = ACT_1_SCREENSHOTS;
				break;
			case 1:
				ssCount = ACT_2_SCREENSHOTS;
				break;
			case 2:
				ssCount = ACT_3_SCREENSHOTS;
				break;
			default:
				break;
		}
		this.setState({
			act: act,
			currScreenshot: 0,
			screenshotMax: ssCount
		});
	}
	
	story() {this.selectOption(0);}
	explore() {this.selectOption(1);}
	nahual() {this.selectOption(2);}
	act1() {this.selectAct(0);}
	act2() {this.selectAct(1);}
	act3() {this.selectAct(2);}
	
	openLightbox() {
		this.setState({isLightboxOpen: true});
	}
	
	closeLightbox() {
		this.setState({isLightboxOpen: false});
	}
	
	toggleLightbox() {
		this.setState({isLightboxOpen: !this.state.isLightboxOpen});
	}
	
	rotateScreenshot(dir) {
		let next = this.state.currScreenshot + dir;
		this.setState({
			currScreenshot: next % this.state.screenshotMax
		});
	}
	
	screenshotForward() {this.rotateScreenshot(1);}
	screenshotBackward() {this.rotateScreenshot(-1);}
	
	autoRotate() {
		if (this.state.doNotRotate || this.state.isLightboxOpen) {
			this.state.doNotRotate = false;
		} else {
			this.rotateScreenshot(1);
		}
		setTimeout(this.autoRotate, IMAGE_ROTATION_TIMER);
	}
	
	render() {
		return (
			<div className='juanito-el-nahualito-page'>
				<Parallax />
				<div className='main-cntr'>
					<div className='juanito-logo' />
					<div className='logo-subtext'>
						An adventure puzzle game by Team Nahual
					</div>
					
					<div className='divider-bar' />
					
					<div className="trailer-cntr">
						<iframe className="trailer" src="https://www.youtube.com/embed/cNzEYpEdDjs" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
					</div>
					
					<div className='divider-bar' />
					
					<div className='description text'>
						Juanito El Nahualito is a short exploration and puzzle based narrative experience focused on the coming of age of a modern Latin American teen with a special power to influence wildlife. He discovers throughout the adventure that his abilities are inherited from his cultural ancestors, the Nahaules. The game uses 2D cutscenes and voiceover interspersed with 3D gameplay to provide historical information about this culture and its legends. It has an accompanying physical storybook that acts as a prequel to the game and will be present at the demo.
					</div>
					
					<div className='divider-bar' />
					
					<div className='text'>
						<div className='options'>
							{this.renderTitles()}
						</div>
						<div className='optionsContent'>
						{this.renderText()}
						</div>
					</div>
					
					<div className='divider-bar' />
					
					<div className='section-header'>
						Gameplay Screenshots
					</div>
					
					<div className='screenshots'>
						<div className='options'>
							{this.renderActs()}
						</div>
						<div className='screenshots'>
							<div className="screenshot-cntr">
								<img src={SML_ACT[this.state.act][this.state.currScreenshot]}
									onClick={this.openLightbox} />
							</div>
						</div>
					</div>
					
					<div className='divider-bar' />
					
					<div className='platforms'>
						<span>Available to play on: </span> Windows • Mac • Linux
					</div>
					
					<div className='download'>
						<span>Download at: </span> <a href="https://teamnahual.itch.io/juanito-el-nahualito">Itch.io</a>
					</div>
					
					<div className='social-media-cntr'>
						<div className='media-text'> Follow development at: </div>
						<a href="https://twitter.com/teamnahual"><div className='media-ico twitter' /></a>
						<a href="https://teamnahual.tumblr.com/"><div className='media-ico tumblr' /></a>
						<a href="https://www.facebook.com/Juanito-el-Nahualito-757032334502080/"><div className='media-ico facebook' /></a>
						<a href="https://www.youtube.com/channel/UC1xYaoWxGgCDW6J1OaXUbfA"><div className='media-ico youtube' /></a>
					</div>
					
					<div className={"modal-cntr" + ((this.state.isLightboxOpen)? "": " hidden")}>
						<div className="modal-background" onClick={this.closeLightbox} />
						<div className="lightbox">
							{(this.state.isLightboxOpen)? (<img src={LRG_ACT[this.state.act][this.state.currScreenshot]}
								onClick={this.screenshotForward} />): ""}
							<div className="close-lightbox" onClick={this.closeLightbox} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
