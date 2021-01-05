import React from 'react';
import ReactDOM from 'react-dom';

/* 类组件 */
class Student extends React.Component {
  constructor(props) {
    super(props);
    console.log('props',this.props)
  }
  render() {
    return <div>{this.props.flag}</div>
  }
  // => 当父组件重新渲染，子组件也会重新许仙安然，首先触发此钩子函数
  componentWillReceiveProps(nextProps) {
    console.log('======>componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log('======>shouldComponentUpdate',nextProps,nextState);
    return true;
  }
}

class Test extends React.Component {
  state = { x: 0 }
  render() {
    return <div>
      {/* 
        * 第一次渲染TEST视图，会创建一个Student(执行了Student完整的生命周期)
        * 当Test重新渲染的时候，也会让Student子组件重新渲染，把最新的属性传递给Student(但不是重新创建)，Student中的钩子函数不会从constructor重新执行
        */}
      <Student flag={this.state.x} />
      <button onClick={() => {
        this.setState({x: this.state.x + 1 })
      }}>点我啊~</button>
    </div>;
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);


