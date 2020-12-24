import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { createElement, render } from './selfJSX'
// import Student from './person'  // 函数式组件


/* 类组件 */
class Student extends React.Component {
  static defaultProps = {
    name: "张三"
  };
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    
  }

  render() {
    return <div>
      <h3>{this.props.name}</h3>
      <h3>{this.props.age}</h3>
    </div>
  }
}

ReactDOM.render(
  <div>
    新视云科技网络有限公司
    <Student name="王博文" age="18"/>
    <Student  age="18"/>
  </div>,
  document.getElementById('root')
);

/* let jsxObj = createElement('div', {
  className: 'box',
  id: 'box',
  index: '1',
  style: {
    color: 'red',
    fontSize: '30px'
  }
}, '新视云', createElement('span', {
  className: 'text'
}, "网络科技公司", createElement('i', null)));

render(jsxObj, document.getElementById('root')); */
