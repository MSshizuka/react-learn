import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './Vote';

/* 导入公共样式 */
import './assets/base.css';

ReactDOM.render(
  <div>
    <Vote title='海贼王2021年完结!' supNum={10} oppNum={20}/>
  </div>,
  document.getElementById('root')
);


