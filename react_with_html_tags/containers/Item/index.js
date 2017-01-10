import React, {Component} from 'react';

import "./item.css";
<<<<<<< HEAD

class Item extends Component {
	render() {
		return (
				<div className="item-style">
					<img src={this.props.src} alt="No image found" className="item-image"/>
					<a href={this.props.href} className="item-link">{this.props.linkname}</a>
					<p>{this.props.info}</p>
				</div>
=======
import Img from '../../components/Img';
import Div from '../../components/Div';
import A from '../../components/A';
import P from '../../components/P';


//Item Container
class Item extends Component {
	render() {
		return (
				<Div class="item-style">
					<Img src={this.props.src} alt="No image found" class="item-image"/>
					<A href={this.props.href} class="item-link">{this.props.linkname}</A>
					<P>{this.props.info}</P>
				</Div>
>>>>>>> e68a2edfdc9cd63496766847a1ad9eba1672fbb6
		)
	}
}

export default Item;

