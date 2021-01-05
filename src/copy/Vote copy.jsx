import React from 'react';
import PropTypes from 'prop-types';
import './vote.css';

export default class Vote extends React.Component {
  //=>设置属性规则
  static defaultProps = {
    supNum: 0,
    oppNum: 0
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    supNum: PropTypes.number,
    oppNum: PropTypes.number
  };
  //=>设置初始值
  constructor(props) {
    super(props);
    this.state = {
      supNum: this.props.supNum,
      oppNum: this.props.oppNum
    }
  }
  //=>渲染组件
  render() {
    let {supNum, oppNum} = this.state;
    return <div className="voteBox">
      <header className="headerBox">
        <h3>{this.props.title}</h3>
        <span>N: { supNum + oppNum}</span>
      </header>
      <main className="mainBox">
        <p>支持人数: {supNum}</p>
        <p>反对人数：{oppNum}</p>
        <p>支持率：{this.getRatio()}</p>
      </main>
      <footer className="footerBox">
        <button onClick={this.handle.bind(null, 'sup')}>支持</button>
        <button onClick={this.handle}>反对</button>
      </footer>
    </div>;
  }
  //=>定义方法（Vote.prototype） 为了保证this是实例 一般采用箭头函数来构建
  getRatio = () => {
    let {supNum, oppNum} = this.state,
        ratio = null,
        total = supNum + oppNum;
        ratio = total === 0 ? 0 : supNum / total * 100;
    return ratio.toFixed(2) + '%'; 
  };
  handle = type => {
    type === 'sup' ? this.state.supNum  = this.state.supNum + 1 : this.state.oppNum = this.state.oppNum + 1;
    this.forceUpdate();
  }
}