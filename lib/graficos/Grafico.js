var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';

import Highcharts from 'highcharts';

var Grafico = function (_PureComponent) {
    _inherits(Grafico, _PureComponent);

    function Grafico(props) {
        _classCallCheck(this, Grafico);

        var _this = _possibleConstructorReturn(this, (Grafico.__proto__ || Object.getPrototypeOf(Grafico)).call(this, props));

        _this.toggleModoApresentacao = function () {

            console.debug("aaaaa", _this);
            _this.options.yAxis[0].labels.style = {
                fontSize: _this.getCss().fontSize,
                font: _this.getCss().fontSize
            };

            _this.options.xAxis[0].labels.style = {
                fontSize: _this.getCss().fontSize,
                font: _this.getCss().fontSize
            };

            _this.options.yAxis[0].title.style = {
                fontSize: _this.getCss().fontSize
            };

            _this.options.yAxis[1].title.style = {
                fontSize: _this.getCss().fontSize
            };

            // this.options.series[1].dataLabels.style.fontSize = '42px';


            _this.options.legend = {
                itemStyle: {
                    fontSize: _this.getCss().fontSize,
                    font: _this.getCss().fontSize
                }
            };

            _this.chart = new Highcharts[_this.props.type || 'Chart'](_this.id, _this.options);
        };

        _this.chart = null;
        _this.modules = [];

        _this.id = "grafico" + Math.random();

        _this.state = {
            series: _this.props.series
        };
        return _this;
    }

    _createClass(Grafico, [{
        key: 'getCss',
        value: function getCss() {
            var css = {
                fontSize: '12px'
            };
            if (this.props.modoApresentacao) {
                css.fontSize = '18px';
            } else {}
            return css;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.modules) {
                this.modules.forEach(function (module) {
                    module(Highcharts);
                });
            }

            var _self = this;
            var config = {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: ''
                },
                xAxis: [{
                    categories: this.props.categories,
                    crosshair: true,
                    labels: {
                        style: {
                            fontSize: this.getCss().fontSize,
                            font: this.getCss().fontSize,
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                }],
                yAxis: [],
                tooltip: {
                    shared: true
                },
                credits: {
                    enabled: false
                },
                legend: {
                    itemStyle: {
                        fontSize: this.getCss().fontSize,
                        font: this.getCss().fontSize
                    }
                },
                plotOptions: {
                    series: {
                        // dataLabels: {
                        //     enabled: true,
                        //     style: {
                        //         fontSize : '15px'
                        //     }
                        // }
                    }
                }

            };

            this.props.series.forEach(function (serie, i) {
                config.yAxis.push({
                    labels: {
                        format: '%',
                        style: {
                            fontSize: _this2.getCss().fontSize,
                            font: _this2.getCss().fontSize,
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: serie.name,
                        style: {
                            fontSize: _this2.getCss().fontSize,
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: i > 0
                });
            });

            this.options = Highcharts.merge(config, {
                series: this.props.series
            });

            if (this.props.series) this.montaGrafico(this.props.series);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.series && prevProps.series != this.props.series) {
                this.montaGrafico(this.props.series);
            }

            if (this.props.modoApresentacao != null && prevProps.modoApresentacao != this.props.modoApresentacao) {
                this.toggleModoApresentacao();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.chart) {
                this.destroyChart();
            }
        }
    }, {
        key: 'montaGrafico',
        value: function montaGrafico(series) {
            var _this3 = this;

            this.chart = new Highcharts[this.props.type || 'Chart'](this.id, this.options);
            this.props.series.forEach(function (serie, i) {
                _this3.chart.yAxis[i].axisTitle.attr({
                    text: serie.name
                });
            });
        }
    }, {
        key: 'destroyChart',
        value: function destroyChart() {
            this.chart.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                series = _props.series,
                chipsFiltros = _props.chipsFiltros;


            return React.createElement('div', { id: this.id });
        }
    }]);

    return Grafico;
}(PureComponent);

Grafico.propTypes = {
    series: React.PropTypes.array.isRequired,
    modoApresentacao: React.PropTypes.bool
};
Grafico.defaultProps = {
    series: [],
    modoApresentacao: false
};


export default Grafico;