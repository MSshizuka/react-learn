// import React from 'react';
// import ReactDOM from 'react-dom';
import { createElement, render } from './selfJSX'
// let name = 'shizuka'

// ReactDOM.render(
//   <div>{name}</div>,
//   document.getElementById('root')
// );

let jsxObj = createElement('div', {
  className: 'box',
  id: 'box',
  index: '1',
  style: {
    color: 'red',
    fontSize: '16px'
  }
}, '新视云', createElement('span', {
  className: 'text'
}, "网络科技公司", createElement('i', null)));

render(jsxObj, document.getElementById('root'));
