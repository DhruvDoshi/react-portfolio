import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class skillBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartOptions: {}
        };
    }
    componentDidMount = () => {
        this.setChartData(this.props.skillsData, this.props.skills)
    }

    setChartData = (skillsData, skills) => {
        let options = {
            chart: {
                type: "bar",
                backgroundColor: "transparent",
                height: 370,
                border: 0
            },
            colors: ["#9999FF", "#8080FF", "#6666FF", "#4D4DFF", "#3333FF", "#9EC2FF", "#7B9FF2", "#4259C3", "#212AA5", "#000a94"],
            // colors: ["#5f5f5f", "#545454", "#4a4a4a", "#3f3f3f", "#353535", "#9EC2FF", "#7B9FF2", "#4259C3", "#212AA5", "#000a94"],
            credits: {
                enabled: false
            },
            title: {
                text: "",
                align: "left",
                style: {
                    color: "#000",
                    fontSize: "12px",
                    fontFamily: "Arial",
                },
            },
            xAxis: {
                categories: skills,
                gridLineColor: "transparent",
                gridLineWidth: 0,
                lineWidth: 0,
                labels: {
                    enabled: true,
                    allowOverlap: true,
                    style: {
                        color: '#8283A0',
                        fontFamily: "Arial",
                    }
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: "transparent",
                gridLineWidth: 0,
                lineWidth: 0,
                stackLabels: {
                    enabled: false,
                    // crop: false, 
                    // overflow: "allow", 
                    // x: this.props.stackLabelGap, 
                    style: {
                        color: "#979AB1",
                        textOutline: "none",
                        fontWeight: "normal",
                        fontSize: "11px",
                        fontFamily: "Arial",
                    },
                },
                title: {
                    enabled: false,
                    text: '',
                    style: {
                        fontSize: "11px",
                        color: '#8283A0',
                        fontFamily: "Arial",
                        cursor: "default",
                        fill: "#8283A0",
                    }
                },
                labels: {
                    enabled: true,
                    style: {
                        color: '#8283A0',
                        fontFamily: "Arial",
                    },
                }
            },
            tooltip: {
                enabled: true,
                useHTML: true,
                style: {
                    color: "#000",
                    fontSize: "11px",
                    fontFamily: "arial",
                    fontWeight: "normal",
                },
                backgroundColor: "#FFFFFF",
                shared: false,
                valueDecimals: 2,
                formatter: function () {
                    return ("<b>" + this.key + ":</b> " + this.point.options.y);
                },
            },
            legend: {
                enabled: true,
                symbolHeight: 8,
                symbolWidth: 8,
                symbolRadius: 4,
                itemStyle: {
                    color: "#8283A0",
                    fontSize: "11px",
                    fontWeight: "normal",
                    fontFamily: "Arial",
                },
                itemHoverStyle: {
                    color: "#8283A0",
                    fontSize: "11px",
                    fontFamily: "Arial",
                    fontWeight: 'normal'
                },
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: "{point.format}",
                        style: {
                            color: "#979AB1",
                            textOutline: "none",
                            fontWeight: "normal",
                            fontSize: "11px",
                            fontFamily: "Arial",
                        },
                    }
                },
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    stacking: 'normal',
                    borderWidth: 0,
                    pointWidth: 15,
                    groupPadding: 0,
                    centerInCategory: true
                }
            },
            series: skillsData,
        };
        this.setState({ chartOptions: options });
    };

    render() {
        return (
            <HighchartsReact
                options={this.state.chartOptions}
                highcharts={Highcharts}
            />
        );
    }
}
export default skillBarChart;