import React from 'react';
import MenuItem from './MenuItem';

var menuStyle = {
	width: 10 + '%',
    position: 'fixed',
    marginTop: 10 + 'em',
    fontFamily: 'Roboto'
};

export default class Menu extends React.Component {
	
	render() {
		return (
			<div style={menuStyle}>
				<MenuItem label={"LATEST"} textColor={'white'} color={"#F44336"} /><br/>
				<MenuItem label={"TECHNOLOGIES"} textColor={'white'} color={"#3F51B5"} /><br/>
				<MenuItem label={"METHODOLOGIES"} textColor={'white'} color={"#9C27B0"} /><br/>
				<MenuItem label={"UX"} color={"#FFEB3B"} /><br/>
				<MenuItem label={"BROAD"} textColor={'white'} color={"#F57F17"} /><br/>
				<MenuItem label={"ABOUT ME"} textColor={'white'} color={"#4CAF50"} /><br/>
			</div>);
	}
}