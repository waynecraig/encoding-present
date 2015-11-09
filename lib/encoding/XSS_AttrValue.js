require('./sass/fullpage.sass');
require('./sass/code.sass');
import React, { Component } from 'react';
import CodeBlock from '../components/CodeBlock';
import ArtTemplate from 'art-template/dist/template';

export default class Slide extends Component {

	constructor() {
		super();

		this.state = {};
		
		this.state.codeCom = this._codeCom = `// 普通文本替换
var A = 'ok';
return '<p id="{{A}}" onclick={{A}}></p>'.replace(/{{A}}/g, A);`;

		this.state.codeArt = this._codeArt = `// Art-template
var A = 'ok';
// var A = '1 onmouseover=alert(1)';
// var A = '1" onmouseover=alert(1)';
// var A = 'alert(1)';
// var A = '&#97;lert(1)';
// var A = '\\\\u0061lert(1)';
// var A = '&#92;u0061lert(1)';
var render = ArtTemplate.compile('<p id="{{A}}" onclick={{A}}></p>');
return render({A:A});`;

		this.state.codeJSX = this._codeJSX = `// JSX
var A = 'ok';
var s = {id: A, onClick: A};
// s.onClick = function() {...}; // 正常
// s.onClick = function() {eval(A)}; // 除非这样写才会被注入
return React.renderToString(React.createElement('p', s));
// equal to <p id={A} onclick={A}></p>>`;

	}

	getComResult() {
		try {
			var fun = new Function(this._codeCom);
			return fun();
		} catch(e) {
			return e.toString();
		}
	}

	getArtResult() {
		try {
			var fun = new Function('ArtTemplate', this._codeArt);
			return fun(ArtTemplate);
		} catch(e) {
			return e.toString();
		}
	}

	getJSXResult() {
		try {
			var fun = new Function('React', this._codeJSX);
			return fun(React);
		} catch(e) {
			return e.toString();
		}
	}

	update(v, type) {
		this['_code' + type] = v;
	}

	apply(e, type) {
		e.stopPropagation();
		let s = {};
		s['code'+type] = this['_code'+type];
		s['res'+type] = this['get'+type+'Result']();
		this.setState(s);
	}

	render() {
		return (
			<div className='fullpage'>
				<h1>对属性值注入</h1>
				<div className='code'>
					<div className='block'>
						<CodeBlock id='codeCom' onChange={(v)=>this.update(v, 'Com')}>
							{this.state.codeCom}
						</CodeBlock>
						<span className='apply' onClick={(e)=>this.apply(e, 'Com')}>应用</span>
						<div className='result'>{this.state.resCom}</div>
					</div>
					<div className='block'>
						<CodeBlock id='codeArt'  onChange={(v)=>this.update(v, 'Art')}>
							{this.state.codeArt}
						</CodeBlock>
						<span className='apply' onClick={(e)=>this.apply(e, 'Art')}>应用</span>
						<div className='result'>{this.state.resArt}</div>
					</div>
					<div className='block'>
						<CodeBlock id='codeJSX' onChange={(v)=>this.update(v, 'JSX')}>
							{this.state.codeJSX}
						</CodeBlock>
						<span className='apply' onClick={(e)=>this.apply(e, 'JSX')}>应用</span>
						<div className='result'>{this.state.resJSX}</div>
					</div>
				</div>
			</div>
		)
	}

}
