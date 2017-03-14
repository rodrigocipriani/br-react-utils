var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Link } from 'react-router';

var RouterLink = function RouterLink(_ref) {
    var props = _objectWithoutProperties(_ref, []),
        children = _ref.children,
        href = _ref.href;

    return React.createElement(
        Link,
        _extends({ activeClassName: 'light-blue-text text-darken-4 grey lighten-4', className: 'waves-effect' }, props),
        children
    );
};

var css = {
    fontWeight: 'bolder'
};

export default RouterLink;