import React, {Component} from 'react';
import './sidebar.css';

<<<<<<< HEAD
=======
import Img from '../../components/Img';
import SelectTag from '../../components/Select';
import OptionTag from '../../components/Option';
import Div from '../../components/Div';
import A from '../../components/A';
import Ul from '../../components/Ul';
import Li from '../../components/Li';

>>>>>>> e68a2edfdc9cd63496766847a1ad9eba1672fbb6

//SideBar Container
class SideBar extends Component {
	render() {
		return (

<<<<<<< HEAD
			<div className="sidebar-style">
			<div className="sideimage-style">
				<img src="../../images/gradient.jpg" alt="No image found" className="image-style-sidebar"/>
			<ul className="movie-list-style">
			<li>
			<a href="https://en.wikipedia.org/wiki/list_of_films_based_on_Marvel_Comics">MARVEL FILMS</a>
			</li>
			<li>
			<a href="https://en.wikipedia.org/wiki/list_of_Marvel_Comics_characters">MARVEL CHARACTERS
			</a>
			</li>
			<li>
			Search for Movies by Year
			</li>
			<li>
			<select>
				<option>1991-1995</option>
				<option>1996-2000</option>
				<option>2001-2005</option>
				<option>2006-2010</option>
				<option>2011-2015</option>
				<option>2016-Present</option>
			</select>
			</li>
			</ul>
			</div>
			</div>
=======
			<Div class="sidebar-style">
			<Div class="sideimage-style">
				<Img src="../../images/gradient.jpg" alt="No image found" class="image-style-sidebar"/>
			<Ul class="movie-list-style">
			<Li>
			<A href="https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics">MARVEL FILMS</A>
			</Li>
			<Li>
			<A href="https://en.wikipedia.org/wiki/List_of_Marvel_Comics_characters">MARVEL CHARACTERS
			</A>
			</Li>
			<Li>
			Search for Movies by Year
			</Li>
			<Li>
			<SelectTag>
				<OptionTag>1991-1995</OptionTag>
				<OptionTag>1996-2000</OptionTag>
				<OptionTag>2001-2005</OptionTag>
				<OptionTag>2006-2010</OptionTag>
				<OptionTag>2011-2015</OptionTag>
				<OptionTag>2016-Present</OptionTag>
			</SelectTag>
			</Li>
			</Ul>
			</Div>
			</Div>
>>>>>>> e68a2edfdc9cd63496766847a1ad9eba1672fbb6
			
			)
	}
}

export default SideBar;