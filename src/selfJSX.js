/* 
 *  createElement: 创建出一个虚拟的DOM对象
 */

export function createElement(type,props,...childs) {
  let jsxObj = {
    type,
    props: {},
    key: null,
    ref: null
  };
  if (props) {
    //=>处理Key和Ref
    if (props.hasOwnProperty('key')) {
      jsxObj.key = props.key;
      delete props.key;
    };
    if (props.hasOwnProperty('ref')) {
      jsxObj.ref = props.ref;
      delete props.ref;
    };
    jsxObj.props = Object.assign(jsxObj.props, props);
  }

  //=> children处理
  if (childs.length > 0) {
    jsxObj.props.children = childs.length === 1 ? childs[0] : childs;
  }

  return jsxObj;
}


/* 
 * render: 把虚拟DOM转化为真实DOM
 */

export function render (jsxObj, container, cb) {
  let { type, props } = jsxObj;
  let element = document.createElement(type);
  for (let key in props) {
    if (!props.hasOwnProperty(key)) break;
  }
  container.appendChild(element);
  cb && cb();
}