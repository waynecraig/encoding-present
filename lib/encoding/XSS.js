import React, { Component } from 'react';

export default class Slide extends Component {

	render() {
		return (
			<div>
				<h1>模板渲染时防止XSS</h1>
				<ul>
					<li>讨论场景：模板加数据渲染出html时，如何防止被注入可执行脚本。</li>
					<li>通过对数据内容进行转义编码，是否能防止所有XSS？</li>
					<li>对比以下三种生成方式的处理效果</li>
					<ul>
						<li>1. 直接文本替换: 直接用数据文本替换模板中的占位符</li>
						<li>2. art-template: 先对不同位置的数据文本使用不同的转义方式编码，再替换占位符。</li>
						<li>3. JSX: 在js运行环境中先生成虚拟DOM，再输出合规的html文本。</li>
					</ul>
				</ul>
			</div>
		)
	}

}
