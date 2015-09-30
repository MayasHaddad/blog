import React from 'react';
import Menu from './Menu';
import MainPaper from './MainPaper';
import '../../../styles/main.css';

export default class Blog extends React.Component {
	
	render() {
		return (
			<div>
				<Menu />
				<MainPaper contextColor={"#3F51B5"} />
			</div>);
	}
}