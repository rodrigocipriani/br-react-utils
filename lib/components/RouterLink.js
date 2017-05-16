function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
// import {Link} from 'react-router';


// {/*<Link activeClassName='light-blue-text text-darken-4 grey lighten-4'  className="waves-effect" {...props}>*/}
//     {/*{children}*/}
// {/*</Link>*/}
var RouterLink = function RouterLink(_ref) {
    var props = _objectWithoutProperties(_ref, []),
        children = _ref.children,
        href = _ref.href;

    return React.createElement(
        'div',
        null,
        'link corrigir'
    );
};

var css = {
    fontWeight: 'bolder'
};

export default RouterLink;
//# sourceMappingURL=RouterLink.js.map