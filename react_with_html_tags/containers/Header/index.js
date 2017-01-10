import React, {Component} from 'react';
import './header.css';

<<<<<<< HEAD

class Header extends Component {
	render() {
		return (
			<div>
				<div className="header-style">
					<h1 className="h1-style">MARVELS</h1>
					<img src="../images/marvel.jpg" alt="no image found" className="image-style"/>
					<span className="span-style">
						<input type='text' className="input-style"/>
						<button type='submit' className="button-style">Search</button>
					</span>
				</div>
			</div>
=======
import Input from '../../components/Input';
import Img from '../../components/Img';
import H1 from '../../components/H1';
import Button from '../../components/Button';
import Div from '../../components/Div';
import Span from '../../components/Span';

//Header Container
class Header extends Component {
	render() {
		return (
			<Div>
				<Div class="header-style">
					<H1 class="h1-style">MARVELS</H1>
					<Img src="../images/marvel.jpg" alt="no image found" class="image-style"/>
					<Span class="span-style">
						<Input type='text' class="input-style"/>
						<Button type='submit' class="button-style">Search</Button>
					</Span>
				</Div>
				</Div>
>>>>>>> e68a2edfdc9cd63496766847a1ad9eba1672fbb6
		)
	}
}

export default Header;

