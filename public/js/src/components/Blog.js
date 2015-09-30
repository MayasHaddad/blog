import React from 'react';
import Menu from './Menu';
import MainPaper from './MainPaper';

export default class Blog extends React.Component {
	
	render() {
		return (
			<div>
				<Menu />
				<MainPaper contextColor={"#3F51B5"} />
			</div>);
	}
}