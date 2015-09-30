import React from 'react';

export default class MenuItem extends React.Component {
	
	constructor(props) {
        super(props);
        this.props = props;
	}

	render() {
		return <div style={{
			backgroundColor: this.props.color,
			color: this.props.textColor,
			padding: 0.5 + 'em',
			textAlign: 'center',
			borderRadius: 1 + 'px',
			cursor: 'pointer'
		}} >{this.props.label}</div>;
	}
}