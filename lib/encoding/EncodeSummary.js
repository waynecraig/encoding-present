require('./css/tree.css');
import React, { Component } from 'react';
import d3tree from './d3tree';

export default class Slide extends Component {

	render() {
		return (
			<div id='encode-tree' onClick={(e)=>e.stopPropagation()}> </div>
		)
	}

	componentDidMount() {
		d3tree('encode-tree', data);
	}

}

const data = {
   "name": "字符编码",
   "children": [
    {
     "name": "ASCII",
     "children": [
      {"name": "只定义了0-127", "size": 1},
      {"name": "定长为一个字节", "size": 1},
     ]
    },
    {
     "name": "Uincode",
     "children": [
      {"name": "试图对世界上所有字符做统一编码", "size": 1},
      {"name": "编码空间从U+0000到U+10FFFF，共有1,112,064个码位", "size": 22333},
      {
	   "name": "实现格式", 
	   "children": [
	    {
		 "name": "UTF-8", 
	     "children": [
	      {"name": "1-4个字节", "size": 1},
	      {"name": "多字节序列，看首字节可以知道长度", "size": 1},
	      {"name": "兼容ASCII", "size": 1}
	     ]
	    },
	    {
		 "name": "UTF-16", 
	     "children": [
	      {"name": "绝大多数字符可以用双字节表示", "size": 1},
	      {"name": "利用保留区段实现四字节编码", "size": 1},
	      {"name": "BOM，区分小尾序大尾序", "size": 1}
	     ]
	    },
	    {
		 "name": "UTF-32", 
	     "children": [
	      {"name": "定长4字节", "size": 1}
	     ]
	    }
	   ]
	  }
     ]
    },
    {
     "name": "others",
     "children": [
      {
	   "name": "gb2312",
	   "children": [
	    {"name": "针对简体中文的编码，有六千多汉字", "size": 1},
		{"name": "兼容ASCII", "size": 1}
	   ]
	  }
     ]
    }
   ]
  }
