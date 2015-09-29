import React from 'react';

export default class MenuItem extends React.Component {
	
	constructor(props) {
        super(props);
        this.props = props;
	}

	render() {
		return <div style={{
			backgroundColor: this.props.color,
			padding: 0.5 + 'em',
			textAlign: 'center'
		}} >{this.props.label}</div>;
	}
}