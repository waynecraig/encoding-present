require('./sass/fullpage.sass');
import React, { Component } from 'react';
import CodeBlock from '../components/CodeBlock';

const code = `var a = 1;
function b(c) { alert(c); };
b(a);

// 等价于

var \\u0061 = 1;
function \\u0062(\\u0063) { \\u0061\\u006c\\u0065\\u0072\\u0074(\\u0063); };
\\u0062(\\u0061);
`;

export default class Slide extends Component {

	render() {
		return (
			<div className='fullpage'>
				<h1>js中的反斜杠转义</h1>
				<CodeBlock id="escape_in_js">
					{ code }
				</CodeBlock>
			</div>
		)
	}

}
