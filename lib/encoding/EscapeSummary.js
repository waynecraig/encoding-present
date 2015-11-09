require('./css/tree.css');
import React, { Component } from 'react';
import d3tree from './d3tree';

export default class Slide extends Component {

	render() {
		return (
			<div id='escape-tree' onClick={(e)=>e.stopPropagation()}> </div>
		)
	}

	componentDidMount() {
		d3tree('escape-tree', data);
	}

}

const data = {
   "name": "字符转义",
   "children": [
    {
	 "name": "反斜杠转义",
	 "children":[
	  {
	   "name": "形式",
	   "children": [
	    {"name": "\\ddd 三位八进制", "size": 1},
	    {"name": "\\xhh 两位十六进制", "size": 1},
	    {"name": "\\uhhhh 四位十六进制", "size": 1},
	    {"name": "\\u{hhhhh} 任意位十六进制", "size": 1}
	   ],
	  },
	  {
	   "name": "编码方式",
	   "children": [
		{"name": "\\uhhhh为UTF-16编码，其他形式表示Unicode码值", "size": 1}
	   ]
	  },
	  {
	   "name": "应用场景",
	   "children": [
		{"name": "js", "size": 1}
	   ]
	  }
	 ]
	},
    {
	 "name": "百分号转义",
	 "children":[
	  {
	   "name": "形式",
	   "children": [
	    {"name": "%hh 两位十六进制", "size": 1}
	   ],
	  },
	  {
	   "name": "编码方式",
	   "children": [
		{"name": "UTF-8", "size": 1}
	   ]
	  },
	  {
	   "name": "应用场景",
	   "children": [
		{"name": "uri, url", "size": 1}
	   ]
	  }
	 ]
	},
    {
	 "name": "实体引用转义",
	 "children":[
	  {
	   "name": "形式",
	   "children": [
	    {"name": "&name;", "size": 1},
	    {"name": "&#dd; 任意位十进制", "size": 1}
	   ],
	  },
	  {
	   "name": "编码方式",
	   "children": [
		{"name": "Unicode码值", "size": 1}
	   ]
	  },
	  {
	   "name": "应用场景",
	   "children": [
		{"name": "html, SGML, XML", "size": 1}
	   ]
	  }
	 ]
	}
   ]
  }
