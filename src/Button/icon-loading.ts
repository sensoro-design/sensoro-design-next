import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

// @ts-ignore
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext } from 'react';
import { IconContext } from '../../icon/react-icon/context';

function IconLoadingComponent(iconProps, ref) {
  var _useContext = useContext(IconContext),
      prefixCls = _useContext.prefixCls;

  var spin = iconProps.spin,
      className = iconProps.className;

  var props = _objectSpread(_objectSpread({
    ref: ref
  // @ts-ignore
  }, iconProps), {}, {
    className: "".concat(className ? className + ' ' : '').concat(prefixCls, "-icon ").concat(prefixCls, "-icon-loading")
  });

  if (spin) {
    props.className = "".concat(props.className, " ").concat(prefixCls, "-icon-loading");
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/React.createElement(
    "svg", _extends({
      fill: "none",
      viewBox: "0 0 1024 1024",
      width: "1em",
      height: "1em"
    }, props), /*#__PURE__*/
    React.createElement(
      "defs",
      {},
      React.createElement('linearGradient',
        {
          id:"left",
          x1: "100%",
          y1:"80%",
          x2: "100%",
          y2:"0%",
        },
        React.createElement('stop', {
          offset:"0%", stopColor:"currentColor", stopOpacity:"0.5"
        }),
        React.createElement('stop', {
          offset: "100%", stopColor: "currentColor", stopOpacity: "1"
        }
      )),
      React.createElement('linearGradient',
        {
          id: "right", x1: "0%", y1: "0%", x2: "0%", y2: "80%"
        },
        React.createElement('stop', {
          offset:"0%", stopColor:"currentColor", stopOpacity:"0"
        }),
        React.createElement('stop', {
          offset: "100%", stopColor: "currentColor", stopOpacity: "0.5"
        }
      ))
    ),
    React.createElement("path", {
      fill: "url(#left)",
      d: "M512.00000004 64v76.032a369.92 369.92 0 0 0-263.04 108.864A370.432 370.432 0 0 0 140.03200004 512a369.92 369.92 0 0 0 108.928 263.04A370.432 370.432 0 0 0 512.00000004 883.968V960A448 448 0 0 1 512.00000004 64z"
    }),
    React.createElement("path", {
      fill: "url(#right)",
      d: "M959.99999996 512a448 448 0 0 1-432.64 447.744L511.99999996 960v-76.032c50.304 0 99.008-9.792 144.64-29.184a372.032 372.032 0 0 0 118.4-79.808A369.088 369.088 0 0 0 883.96799996 512L959.99999996 512.064z"
    })
  );
}

var IconLoading = /*#__PURE__*/React.forwardRef(IconLoadingComponent);

IconLoading.defaultProps = {
  isIcon: true
};
IconLoading.displayName = 'IconLoading';
export default IconLoading;
