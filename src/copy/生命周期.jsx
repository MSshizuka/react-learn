import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { createElement, render } from './selfJSX'
// import Student from './person'  // 函数式组件


/* 类组件 */
class Student extends React.Component {
  // 生命周期 => 1.处理属性 (获取默认值和校验传递的属性类型)
  static defaultProps = {
    name: "张三"
  };
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  // 2.处理状态 (执行constructor获取初始的状态信息 没有constructor则执行state={})
  constructor(props) {
    super(props);
    this.state = {
      n: 100
    }
    console.log('======>constructor')
  }
  // state = {n : 100}; //=> this.state={} 和写constructor一样
  // 3.componentWillMount 第一次组件渲染之前
  componentWillMount() {
    // => 从服务器获取数据（把获取的数据重新赋值给状态或者存放到redux中）
    console.log('======>componentWillMount')
  }
  // 4.render：第一次或者重新进行试图渲染
  render() {
    console.log('======>render')
    return <div onClick={() => {
      // => 修改状态信息
      this.setState({ n: this.state.n + 1 });
    }}>{this.state.n}</div>
  }
  // 5.componentDidMount: 第一次渲染完成
  componentDidMount() {
    // => 此处可以获取到DOM元素了
    console.log('======>componentDidMount')
  }
  // =>更新状态后
  // =>1.是否应该更新组件
  shouldComponentUpdate(nextProps, nextState) {
    // 返回true更新组件，返回false不更新组件
    // 在这个钩子函数中做一些组件的性能优化，哪些组件更新，哪些不更新
    console.log('======>shouldComponentUpdate', this.props, this.state, nextProps, nextState);
    return true
  }
  componentWillUpdate() {
    console.log('======>componentWillUpdate');
  }
  // render
  componentDidUpdate() {
    console.log('======>componentDidUpdate');
  }
}

ReactDOM.render(
  <div>
    新视云科技网络有限公司
    <Student />
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
