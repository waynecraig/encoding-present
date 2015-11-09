require('./sass/fullpage.sass');
require('./sass/browser.sass');
import React, { Component } from 'react';
import CodeBlock from '../components/CodeBlock';

const code = `<!doctype html>
<html>
	<head>

		<style>
			* { margin: 0; }
		</style>

	</head>
	<body>
	
		<div onclick="alert(1)" data-item="ok">

			<a href="javascript:test();">test</a>

		</div>

		<script>
			function test() {
				alert('test');
			}
		</script>

	</body>
</html>`;

export default class Slide extends Component {

	render() {
		return (
			<div className='fullpage'>
				<h1>浏览器对html文档各部分的解析</h1>
				<div className='browser'>
					<CodeBlock>{code}</CodeBlock>
					<div className='rule'>
						<div className="row">
							<li>标签名</li>
							<ul>
								<li>不会进行实体引用解析</li>
							</ul>
						</div>
						<div className="row">
							<li>属性名</li>
							<ul>
								<li>不会进行实体引用解析</li>
							</ul>
						</div>
						<div className="row">
							<li>属性值</li>
							<ul>
								<li>会首先进行实体引用解析</li>
								<li>href属性值执行时会进行百分号解析</li>
								<li>当被作为js执行时，会进行反斜杠解析</li>
							</ul>
						</div>
						<div className="row">
							<li>标签内容</li>
							<ul>
								<li>会进行实体引用解析</li>
								<li>script和style标签例外</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
