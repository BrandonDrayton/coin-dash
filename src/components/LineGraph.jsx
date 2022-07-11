import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'
import Chart from 'chart.js/auto'

const { Title } = Typography

function LineGraph({ coinHistory, currentPrice, coinName }) {
    const coinPrice = []
    const coinTimestamp = []

    coinHistory.prices.map((price) => (coinPrice?.push(price[1])))
    coinHistory.prices.map((date) => (coinTimestamp?.push(new Date(date[0]).toLocaleString())))
    console.log(coinTimestamp)
    console.log(coinHistory)
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#138ada',
                borderColor: '#0071bd',
                borderWidth: '1.3',
                borderJoinStyle: 'round',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineGraph