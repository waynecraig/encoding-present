import React from 'react';
import CodeBlock from '../components/CodeBlock';

const initCode = `let a = 1;
let b = (c)=>c+1;`;

export default class Slide extends React.Component {

  componentWillMount() {
	this.setState({ result: '', code: initCode});
  }

  onChange(newValue) {
	try {
		let a = eval(newValue);
		this.setState({result: a, code: newValue});
	} catch(e) {
		this.setState({result: 'error' + e, code: newValue});
	}
  }

  render() {
    return (
      <div>
        <h1>Why?</h1>

        <p>UI is a product differentiator.</p>

		<CodeBlock onChange={(v)=>this.onChange(v)}>
			{ this.state.code }
		</CodeBlock>

		<div>{this.state.result}</div>
      </div>
    );
  }
}
