import React, { Component } from 'react';
import Highcharts from 'highcharts';

class ChartView extends Component {
    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate() {
        this.renderChart();
    }

    renderChart() {
        const { Header, Data } = this.props.filteredData;
        const numColumns = Header.length;
        let dataSets = [];

        for (var i = 0; i < numColumns; i++) {
            let data = [];
            for (var k = 0; k < Data.length; k++) {
                data.push(Number.parseFloat(Data[k][i]));
            }

            let dataSet = {
                name: Header[i],
                data: data
            }

            dataSets.push(dataSet)
        }
        
        let labels = [];
        for (var j = 0; j < Data.length; j++) {
            labels.push(Data[j][0])
        }

        new Highcharts.Chart(this.chartContainer, {
            chart: {
                type: 'line',
                zoomType: 'xy',
                resetZoomButton: {
                    position: {
                        x: -10,
                        y: 0
                    },
                    relativeTo: 'chart'
                }
            },
            xAxis: {
                categories: labels
            },
            yAxis: {
                title: null
            },
            series: dataSets,
            credits: {
                enabled: false
            },
            plotOptions: {
                line: {
                    marker: {
                        radius: 0
                    }
                }
            },
            title: null
        });
    }

    render() {
        return (
            <div>
                <div ref={ chartContainer => this.chartContainer = chartContainer }></div>
            </div>
        );
    }
}

export default ChartView;
