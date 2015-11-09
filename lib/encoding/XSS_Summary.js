import React, { Component } from 'react';

export default class Slide extends Component {

	render() {
		return (
			<div>
				<h1>XSS风险总结</h1>
				<ul>
					<li>普通文本替换</li>
					<ul>
						<li>标签名、标签属性名、标签属性值、标签内容都有可能被注入可执行代码，不可使用。</li>
					</ul>
					<li>Art-Template</li>
					<ul>
						<li>1. 标签名和属性名有可能被用来注入属性。尽量不要在此使用动态数据，并且不要用&lt;tag/&gt;形式。</li>
						<li>2. 属性值若外部没有包引号可能被注入额外属性，使用模板输入属性值时一定要加引号。</li>
						<li>3. 事件响应型属性可能被注入js，并且js可使用实体引用和反斜杠转义。要避免模板输出事件响应属性。</li>
						<li>4. url中可能被注入代码。要对url做检测。若要判断是否以javascript:开头，需先解析实体引用转义。</li>
					</ul>
					<li>JSX</li>
					<ul>
						<li>只有url中有可能被注入代码，可以通过检测是否以javascript:开头来防止。</li>
					</ul>
				</ul>
			</div>
		)
	}

}
