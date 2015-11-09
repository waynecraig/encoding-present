import React, { Component } from 'react';

export default class Slide extends Component {

	render() {
		return (
			<div>
				<h1>内容概要</h1>
				<ul>
					<li>Web中的字符编码和转义方式</li>
					<ul>
						<li>1. 编码</li>
						<li>2. 转义</li>
					</ul>
					<li>浏览器解析时的解码方式</li>
					<ul>
						<li>1. html标签名、标签属性名、标签属性值、标签内容</li>
						<li>2. 特殊标签:script和style</li>
						<li>3. 特殊属性:href</li>
					</ul>
					<li>如何通过编码来防止XSS</li>
					<ul>
						<li>1. ArtTemplate</li>
						<li>2. JSX</li>
					</ul>
				</ul>
			</div>
		)
	}

}
