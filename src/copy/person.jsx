import React from 'react';

export default function Student(props) {
  return <>
    <h4>学生组件</h4>
    <ul>
      <li>学生名: {props.name}</li>
      <li>年龄：{props.age}</li>
    </ul>
  </>;
}