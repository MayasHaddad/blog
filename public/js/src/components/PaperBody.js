import React from 'react';

export default class PaperBody extends React.Component {
	
	constructor(props) {
        super(props);
        this.props = props;
	}

	render() {
		return (
			<div style={
				{
					backgroundColor: this.props.contextColor,
					boxShadow:  0 + 'px ' + 1 + 'px ' + 1 + 'px ' + 0 + 'px'
				}
			} >
				<div style={{color: this.props.textColor}} >{this.props.currentLabel}</div>
			</div>);
	}
}