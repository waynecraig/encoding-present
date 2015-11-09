import React from 'react';

import Intro from './Intro';
import ContentList from './ContentList';
import Ascii from './Ascii';
import EncodeSummary from './EncodeSummary';
import EscapeSummary from './EscapeSummary';
import Encoding from './Encoding';
import Blowser from './Browser';
import XSS from './XSS';
import XSS_TagName from './XSS_TagName';
import XSS_AttrName from './XSS_AttrName';
import XSS_AttrValue from './XSS_AttrValue';
import XSS_TagContent from './XSS_TagContent';
import XSS_Url from './XSS_Url';
import XSS_Js from './XSS_Js';
import XSS_Summary from './XSS_Summary';
import MultiBrowser from './MultiBrowser';
import Thanks from './Thanks';

const slideComponents = [
	Intro,
	ContentList,
	Ascii,
	EncodeSummary,
	EscapeSummary,
	Encoding,
	Blowser,
	XSS,
	XSS_TagName,
	XSS_AttrName,
	XSS_AttrValue,
	XSS_TagContent,
	XSS_Url,
	XSS_Js,
	XSS_Summary,
	MultiBrowser,
	Thanks
];

export default slideComponents.map((SlideComponent, idx) => {
	return <SlideComponent key={ idx } />;
});
