var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

console.error('DEPRECATED (Paginator.js) - Usar o br-react-utils. [Observar versão do router]');

var Paginator = function (_Component) {
  _inherits(Paginator, _Component);

  function Paginator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Paginator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (pageNumber) {
      _this.props.onChangePage(pageNumber);
    }, _this.nextPage = function (currentPage, isFirstPage) {
      if (!isFirstPage) {
        _this.handleChangePage(currentPage + 1);
      }
    }, _this.prevPage = function (currentPage, isLastPage) {
      if (!isLastPage) {
        _this.handleChangePage(currentPage - 1);
      }
    }, _this.renderPaginator = function (totalPages, currentPage) {
      var ret = [];

      var _loop = function _loop(i) {
        var active = currentPage === i ? 'active' : '';
        ret.push(React.createElement(
          'li',
          {
            key: i, onClick: function onClick() {
              return _this.handleChangePage(i);
            },
            className: ['waves-effect', active].join(' ')
          },
          React.createElement(
            'a',
            { href: '#!' },
            i
          )
        ));
      };

      for (var i = 1; i <= totalPages; i++) {
        _loop(i);
      }
      return ret;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Paginator, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          totalPages = _props.totalPages,
          currentPage = _props.currentPage;


      var isFirstPage = currentPage === 1;
      var isLastPage = currentPage === totalPages;

      return React.createElement(
        'ul',
        { className: 'pagination center-align' },
        React.createElement(
          'li',
          {
            onClick: function onClick() {
              return _this2.prevPage(currentPage, isFirstPage);
            },
            className: ['', isFirstPage ? 'disabled' : 'waves-effect'].join(' ')
          },
          React.createElement(
            'a',
            { href: '#!' },
            React.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' })
          )
        ),
        this.renderPaginator(totalPages, currentPage),
        React.createElement(
          'li',
          {
            onClick: function onClick() {
              return _this2.nextPage(currentPage, isLastPage);
            },
            className: ['', isLastPage ? 'disabled' : 'waves-effect'].join(' ')
          },
          React.createElement(
            'a',
            { href: '#!' },
            React.createElement('i', { className: 'fa fa-chevron-right', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return Paginator;
}(Component);

Paginator.propTypes = {
  totalPages: React.PropTypes.number.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  onChangePage: React.PropTypes.func.isRequired
};

Paginator.defaultProps = {
  totalPages: 0,
  currentPage: 1,
  onChangePage: null
};

export default Paginator;
//# sourceMappingURL=Paginator.js.map