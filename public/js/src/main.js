var React = require('react'),
Latest = require('./components/pages/Latest'),
Technologies = require('./components/pages/Technologies'),
Methodologies = require('./components/pages/Methodologies'),
UX = require('./components/pages/UX'),
Broad = require('./components/pages/Broad'),
AboutMe = require('./components/pages/AboutMe');
import { Router, Route } from 'react-router';
import URLs from './constants/URLs.json';

var app = document.getElementById('app');

React.render((
		<Router>
		    <Route path="/" component={Latest}/>
		    <Route path={URLs.latestPageUrl} component={Latest}/>
		    <Route path={URLs.technologiesPageUrl} component={Technologies}/>
		    <Route path={URLs.methodologiesPageUrl} component={Methodologies}/>
		    <Route path={URLs.uxPageUrl} component={UX}/>
		    <Route path={URLs.broadPageUrl} component={Broad}/>
		    <Route path={URLs.aboutMePageUrl} component={AboutMe}/>
		</Router>
	), 
app);
