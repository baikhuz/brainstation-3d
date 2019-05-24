import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import IctData from '../../data/byprovinceaggregate.json';
import './Graph.scss'
export default class Graph extends Component {

    state = {
        data: "",
    };

    componentDidMount() {
        const filterData = () => {
            const dataObj = IctData[this.props.id];
            const chartData = (Object.keys(dataObj).map((item) => {
                return  {x: item, y: dataObj[item]}
            }))
            const dummyData = {
                labels: [
                    'Alberta',
                    'British Columbia',
                    'Manitoba',
                    'New Brunswick',
                    'Newfoundland and Labrador',
                    'Nova Scotia',
                    'Northwest Territories',
                    'Nunavut',
                    'Ontario',
                    'Prince Edward Island',
                    'Quebec',
                    'Saskatchewan',
                    'Yukon'
                ],
                datasets: [
                    {
                        label: 'Number of Companies by Province',
                        backgroundColor: '#FF3636',
                        borderColor: '#79B4A9',
                        data: chartData,
                    },
                ]
            }
            return dummyData;
        }
        this.setState({data: filterData()});
    }

    render() {

        if (this.state.data === "") {
            return null;
        } else {
            return (
                <div className="mainG">
                    <Bar 
                        data={this.state.data}
                        width={10}
                        height={350}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            )
        }
    }
}

