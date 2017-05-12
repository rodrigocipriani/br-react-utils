var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";

var Title = function (_Component) {
    _inherits(Title, _Component);

    function Title() {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                priority = _props.priority;


            switch (priority) {
                case 1:
                    return React.createElement(
                        "h1",
                        null,
                        children
                    );
                    break;
                case 2:
                    return React.createElement(
                        "h2",
                        null,
                        children
                    );
                    break;
                case 3:
                    return React.createElement(
                        "h3",
                        null,
                        children
                    );
                    break;
                case 4:
                    return React.createElement(
                        "h4",
                        null,
                        children
                    );
                    break;
                case 5:
                    return React.createElement(
                        "h5",
                        null,
                        children
                    );
                    break;
                case 6:
                    return React.createElement(
                        "h6",
                        null,
                        children
                    );
                    break;
                default:
                    return React.createElement(
                        "h3",
                        null,
                        children
                    );
                    break;
            }
        }
    }]);

    return Title;
}(Component);

Title.propTypes = {
    priority: PropTypes.number
};

Title.defaultProps = {
    priority: 3
};

export default Title;
//# sourceMappingURL=Title.js.map