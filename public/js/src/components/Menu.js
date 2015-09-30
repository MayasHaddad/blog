import React from 'react';
import MenuItem from './MenuItem';

var menuStyle = {
	width: 10 + '%',
    position: 'fixed',
    marginTop: 10 + 'em'
};

export default class Menu extends React.Component {
	
	render() {
		return (
			<div style={menuStyle}>
				<MenuItem label={"Latest"} textColor={'white'} color={"#F44336"} /><br/>
				<MenuItem label={"Technical"} textColor={'white'} color={"#3F51B5"} /><br/>
				<MenuItem label={"Methodologies"} textColor={'white'} color={"#9C27B0"} /><br/>
				<MenuItem label={"UX"} textColor={'white'} color={"#F57F17"} /><br/>
				<MenuItem label={"Broad"} color={"#AEEA00"} /><br/>
				<MenuItem label={"About Me"} color={"#C6FF00"} /><br/>
			</div>);
	}
}