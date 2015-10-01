import React from 'react';
import Menu from '../Menu';
import MainPaper from '../MainPaper';
import '../../../../styles/main.css';
import ThemeColors from '../../../../styles/themeColors.json';
import Labels from '../../constants/Labels.json';

export default class Technologies extends React.Component {
	
	render() {
		return (
			<div>
				<Menu />
				<MainPaper 
					currentLabel={Labels.technologiesLabel} 
					textColor={"white"} 
					contextColor={ThemeColors.technologiesThemeColor} />
			</div>);
	}
}