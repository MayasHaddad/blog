import React from 'react';
import MenuItem from './MenuItem';
import ThemeColors from '../../../styles/themeColors.json';
import URLs from '../constants/URLs.json';
import Labels from '../constants/Labels.json';
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
				<MenuItem 
					pageLink={URLs.latestPageUrl}
					label={Labels.latestLabel} 
					textColor={'white'} 
					color={ThemeColors.latestThemeColor} />
				<br/>
				<MenuItem
					pageLink={URLs.technologiesPageUrl}
					label={Labels.technologiesLabel} 
					textColor={'white'} 
					color={ThemeColors.technologiesThemeColor} />
				<br/>
				<MenuItem 
					pageLink={URLs.methodologiesPageUrl}
					label={Labels.methodologiesLabel} 
					textColor={'white'} 
					color={ThemeColors.methodologiesThemeColor} />
				<br/>
				<MenuItem 
					pageLink={URLs.uxPageUrl}
					label={Labels.uxLabel} 
					color={ThemeColors.uxThemeColor} />
				<br/>
				<MenuItem 
					pageLink={URLs.broadPageUrl}
					label={Labels.broadLabel} 
					textColor={'white'} 
					color={ThemeColors.broadThemeColor} />
				<br/>
				<MenuItem 
					pageLink={URLs.aboutMePageUrl}
					label={Labels.aboutMeLabel} 
					textColor={'white'} 
					color={ThemeColors.aboutMeThemeColor} /><br/>
			</div>);
	}
}