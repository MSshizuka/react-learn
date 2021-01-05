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
    this.state = {
      time: new Date().toLocaleString()
    }
  }
   /* 受控组件: 基于状态的更新来驱动视图渲染的组件 */
   /* 非受控组件: 不受状态管控,直接操作DOM */
  render() {
    console.log('B')
    return <div>
      <h3>{this.props.name}</h3>
      <h3>{this.props.age}</h3>
      <p ref={el => {
        // ref多用函数模式
        // el代表当前元素对象
        // 直接把元素对象挂载到实例上
        this.timeBox = el;
      }}>{new Date().toLocaleString()}</p>
      
      {/* <div>当前时间: <span>{this.state.time}</span></div> */}
    </div>
  }

  componentDidMount() {
    //=>第一次加载组件渲染完毕 等价于 VUE中mounted

    setInterval(() => {
      /* this.setState({
        time: new Date().toLocaleString()
      }); */

      this.timeBox.innerHTML = new Date().toLocaleString();
    }, 1000)
    console.log('A')
  }
}

ReactDOM.render(
  <div>
    新视云科技网络有限公司
    <Student name="王博文" age="18" />
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
