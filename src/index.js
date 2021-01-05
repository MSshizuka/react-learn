import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './Vote';

/* 导入公共样式 */
import './assets/base.css';

/* 
 *  PureComponent和Component的区别：某些情况下的状态改变，并不会通知视图的渲染
 */
class Test extends React.Component {
  state = {
    n: 0,
    m: 0
  };
  /* componentWillMount() {
    this.setState({ n: 100 });
  } */
  render() {
    return <div>
      {this.state.n}==={this.state.m}
      <button onClick={this.handle}>按钮</button>
    </div>;
  }
  componentDidMount() {
    /* 
     *  把setState放到一个异步操作中，此时它走的是同步处理
     *    定时器
     *    原生JS事件
     *    AJAX异步请求
     */
    setTimeout(() => {
      this.setState({
        n: 100,
        m: 100
      });
      console.log(this.state);
    }, 1500)
  }
  handle = ev => {
    /* 
     *  setState在合成事件或者生命周期函数中都是异步操作
     *    React有一个类似浏览器的渲染队列机制，它会在多次执行setState情况下把其合并成1次进行重新渲染
     */
    this.setState({ n: 100 });
    this.setState({ n: 200 });
    this.setState({ n: 300 });
    this.setState({ m: 100 });
    console.log(this.state.n)
  }
}

ReactDOM.render(
  <div>
    <Test />
  </div>,
  document.getElementById('root')
);


