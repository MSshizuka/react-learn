import React from 'react';
// import PropTypes from 'prop-types';
import './vote.css';

class VoteMain extends React.Component {
  render() {
    let { supNum, oppNum, ratio } = this.props;
    return <main className="mainBox">
      <p>支持人数: {supNum}</p>
      <p>反对人数：{oppNum}</p>
      <p>支持率：{ratio}</p>
    </main>;
  }
}

class VoteFooter extends React.Component {
  render() {
    let { join } = this.props;
    return <footer className="footerBox">
      <button onClick={join.bind(this, 'sup')}>支持</button>
      <button onClick={join}>反对</button>
    </footer>;
  }
}

export default class Vote extends React.Component {
  state = {
    supNum: 0,
    oppNum: 0
  }
  render() {
    let { supNum, oppNum } = this.state;
    return <div className="voteBox">
      <header className="headerBox">
        <h3>{this.props.title}</h3>
        <span>N: {supNum + oppNum}</span>
      </header>
      <VoteMain supNum={supNum} oppNum={oppNum} ratio={this.getRatio()} />
      <VoteFooter join={this.handle} />
    </div>;
  }
  handle = type => {
    type === 'sup' ? this.state.supNum = this.state.supNum + 1 : this.state.oppNum = this.state.oppNum + 1;
    this.forceUpdate();
  }
  getRatio = () => {
    let ratio = 0,
      { supNum, oppNum } = this.state,
      total = supNum + oppNum;
    ratio = total === 0 ? 0 : supNum / total * 100;
    return ratio.toFixed(2) + '%';
  }
}