var React = require('react');
import Menu from './components/Menu';
import URLs from './constants/URLs.json';
import '../../styles/main.css';

var app = document.getElementById('menu');

React.render((
		<Menu/>
	), 
app);
