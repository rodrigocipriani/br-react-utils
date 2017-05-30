import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Highcharts from 'highcharts';


class Grafico extends PureComponent {

    static propTypes = {
        series          : PropTypes.array.isRequired,
        modoApresentacao: PropTypes.bool
    };

    static defaultProps = {
        series          : [],
        modoApresentacao: false
    };


    constructor(props) {
        super(props);
        this.chart   = null;
        this.modules = [];

        this.id = "grafico" + Math.random();

        this.state = {
            series: this.props.series
        };
    }

    getCss() {
        const css = {
            fontSize: '12px'
        };
        if (this.props.modoApresentacao) {
            css.fontSize = '18px';
        } else {

        }
        return css;
    }


    componentDidMount() {


        if (this.modules) {
            this.modules.forEach(function (module) {
                module(Highcharts);
            });
        }

        let _self    = this;
        const config = {
            chart      : {
                zoomType: 'xy'
            },
            title      : {
                text: ''
            },
            xAxis      : [{
                categories: this.props.categories,
                crosshair : true,
                labels    : {
                    style: {
                        fontSize: this.getCss().fontSize,
                        font    : this.getCss().fontSize,
                        color   : Highcharts.getOptions().colors[1]
                    }
                },
            }],
            yAxis      : [],
            tooltip    : {
                shared: true
            },
            credits    : {
                enabled: false
            },
            legend     : {
                itemStyle: {
                    fontSize: this.getCss().fontSize,
                    font    : this.getCss().fontSize,
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

        this.props.series.forEach((serie, i) => {
            config.yAxis.push({
                labels  : {
                    format: '%',
                    style : {
                        fontSize: this.getCss().fontSize,
                        font    : this.getCss().fontSize,
                        color   : Highcharts.getOptions().colors[1]
                    }
                },
                title   : {
                    text : serie.name,
                    style: {
                        fontSize: this.getCss().fontSize,
                        color   : Highcharts.getOptions().colors[1]
                    }
                },
                opposite: i > 0,
            });
        });

        this.options = Highcharts.merge(config, {
            series: this.props.series
        });

        if (this.props.series) this.montaGrafico(this.props.series);

    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.series && prevProps.series != this.props.series) {
            this.montaGrafico(this.props.series);
        }

        if (this.props.modoApresentacao != null && prevProps.modoApresentacao != this.props.modoApresentacao) {
            this.toggleModoApresentacao();
        }
    }

    toggleModoApresentacao = () => {

        console.debug("aaaaa", this);
        this.options.yAxis[0].labels.style = {
            fontSize: this.getCss().fontSize,
            font    : this.getCss().fontSize
        };

        this.options.xAxis[0].labels.style = {
            fontSize: this.getCss().fontSize,
            font    : this.getCss().fontSize
        };

        this.options.yAxis[0].title.style = {
            fontSize: this.getCss().fontSize,
        };

        this.options.yAxis[1].title.style = {
            fontSize: this.getCss().fontSize,
        };

        // this.options.series[1].dataLabels.style.fontSize = '42px';


        this.options.legend = {
            itemStyle: {
                fontSize: this.getCss().fontSize,
                font    : this.getCss().fontSize,
            }
        };

        this.chart = new Highcharts[this.props.type || 'Chart'](
            this.id,
            this.options
        );

    };


    componentWillUnmount() {
        if (this.chart) {
            this.destroyChart();
        }
    }

    montaGrafico(series) {


        this.chart = new Highcharts[this.props.type || 'Chart'](
            this.id,
            this.options
        );
        this.props.series.forEach((serie, i) => {
            this.chart.yAxis[i].axisTitle.attr({
                text: serie.name
            });
        });

    }

    destroyChart() {
        this.chart.destroy();
    }

    render() {

        const {series, chipsFiltros} = this.props;

        return (
            <div id={this.id}></div>
        );
    }
}

export default Grafico;
