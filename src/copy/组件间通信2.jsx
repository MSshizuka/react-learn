import React from 'react';
import PropTypes from 'prop-types';
import './vote.css';

class VoteMain extends React.Component {
  // 获取的上下文信息挂载到实例的this.context中了（获取的上下文信息是可以修改的，但是不影响祖先信息）
  static contextTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
    ratio: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let { supNum, oppNum, ratio } = this.context;
    return <main className="mainBox">
      <p>支持人数: {supNum}</p>
      <p>反对人数：{oppNum}</p>
      <p>支持率：{ratio}</p>
    </main>;
  }
}

class VoteFooter extends React.Component {
  static contextTypes = {
    handle: PropTypes.func
  }
  render() {
    let { handle } = this.context;
    return <footer className="footerBox">
      <button onClick={ev => {
        handle('sup')
      }}>支持</button>
      <button onClick={ev => {
        handle()
      }}>反对</button>
    </footer>;
  }
}

export default class Vote extends React.Component {
  static childContextTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
    ratio: PropTypes.string,
    handle: PropTypes.func
  };

  getChildContext() {
    //=>第一次在getInitialState之后执行，每当祖先组件中的状态改变，重新渲染的时候，此钩子函数也会重新被执行
    return {
      supNum: this.state.supNum,
      oppNum: this.state.oppNum,
      ratio: this.state.ratio,
      handle: this.handle
    }
  };

  //=>一般都要把 挂载到祖先上下文中的数据放置到祖先的状态上(后期只需要改变祖先的状态，上下文中的信息也会跟着改变，同时祖先元素重新渲染，后代元素也要重新渲染，获取到最新的上下文信息)
  state = {
    supNum: 0,
    oppNum: 0,
    ratio: '0.00%'
  };

  handle = type => {
    type === 'sup' ? this.state.supNum = this.state.supNum + 1 : this.state.oppNum = this.state.oppNum + 1;
    let { supNum, oppNum } = this.state,
      total = supNum + oppNum,
      ratio = supNum / total * 100;
    this.state.ratio = ratio.toFixed(2) + '%';
    this.forceUpdate();
  }

  render() {
    let { supNum, oppNum } = this.state;
    return <div className="voteBox">
      <header className="headerBox">
        <h3>{this.props.title}</h3>
        <span>N: {supNum + oppNum}</span>
      </header>
      <VoteMain />
      <VoteFooter />
    </div>;
  }
}