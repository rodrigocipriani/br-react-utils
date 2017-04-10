import React, { Component } from 'react';

var Aviso = function Aviso(_ref) {
    var children = _ref.children;
    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
            "div",
            { className: "col s12 center-align" },
            React.createElement("br", null),
            React.createElement(
                "span",
                { className: "flow-text" },
                children
            )
        )
    );
};

export default Aviso;
//# sourceMappingURL=Aviso.js.map