import React from 'react';

export default class PaperHeader extends React.Component {
	
	constructor(props) {
        super(props);
        this.props = props;
	}

	render() {
		return (
			<div style={
				{
				width: 100 + '%',
				backgroundColor: this.props.contextColor,
				boxShadow:  0 + 'px ' + 2 + 'px ' + 2 + 'px ' + 1 + 'px',
			}} >
				Technical
			</div>);
	}
}