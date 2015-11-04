require('./sass/intro.sass');
import React, { Component } from 'react';

export default class Intro extends Component {

	render() {
		return (
			<div className='intro'>
				<h1>字符转义与XSS</h1>
				<h3>craigwu<br/>2015-11-05</h3>
			</div>
		)
	}

}
