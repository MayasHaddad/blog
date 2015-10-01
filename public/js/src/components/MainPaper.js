import React from 'react';
import PaperHeader from './PaperHeader';

export default class MainPaper extends React.Component {
	
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div style={
				{
				marginLeft: 'auto',
				marginRight: 1 + 'em',
    			width: 85 + '%',
    			boxShadow:  0 + 'px ' + 0 + 'px ' + 5 + 'px ' + 0 + 'px',
    			marginTop: 2 + 'em',
    			fontFamily: 'Roboto'
			}} >
				<PaperHeader currentLabel={this.props.currentLabel} textColor={this.props.textColor} contextColor={this.props.contextColor} />
				Hello world
			</div>);
	}
}