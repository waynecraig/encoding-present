import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>问题</h1>

        <ul>
          <li>Javascript中String长度是怎么计算的？</li>
          <li>常用的字符转义方法有哪些？</li>
          <li>怎么防止XSS</li>
        </ul>
      </div>
    );
  }
}
