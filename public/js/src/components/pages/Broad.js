import React from 'react';
import Menu from '../Menu';
import MainPaper from '../MainPaper';
import '../../../../styles/main.css';
import ThemeColors from '../../../../styles/themeColors.json';
import Labels from '../../constants/Labels.json';

export default class Broad extends React.Component {
	
	render() {
		return (
			<div>
				<Menu />
				<MainPaper 
					currentLabel={Labels.broadLabel} 
					textColor={"white"} 
					contextColor={ThemeColors.broadThemeColor} />
			</div>
		);
	}
}