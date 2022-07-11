import { Select, Typography, Col, Row } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LineGraph from '../components/LineGraph'
import { useGetCoinsStatsQuery, useGetCoinsHistoryQuery } from '../services/cryptoCoinsApi'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify'
const { Title, Text } = Typography
const { Option } = Select

export const CryptoDetails = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7')
    const { data, isFetching } = useGetCoinsStatsQuery(coinId)
    const { data: coinHistory } = useGetCoinsHistoryQuery({ coinId, timePeriod })
    console.log(data)
    console.log(coinHistory)
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

    const stats = [
        { title: 'Price to USD', value: `$ ${data?.market_data.current_price.usd && millify(data?.market_data.current_price.usd)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: data?.market_cap_rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${data?.market_data.market_cap.usd && millify(data?.market_data.market_cap.usd)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${data?.market_data.market_cap.usd && millify(data?.market_data.market_cap.usd)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${data?.market_data.high_24h.usd && millify(data?.market_data.high_24h.usd)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: data?.market_data.max_supply, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: data?.market_data.max_supply, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: data?.market_data.max_supply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${data?.market_data.max_supply && millify(data?.market_data.max_supply)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${data?.market_data.circulating_supply && millify(data?.market_data.circulating_supply)}`, icon: <ExclamationCircleOutlined /> },
    ];
    if (isFetching) return null
    return (
        <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {data?.name} ({data?.symbol}) Price
                </Title>
                <p>{data.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <LineGraph coinHistory={coinHistory} currentPrice={millify(data?.market_data.current_price.usd)} coinName={data?.name} />
            <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">{data.name} Value Statistics</Title>
                        <p>An overview showing the statistics of {data.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {stats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                        <p>An overview showing the statistics of {data.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {genericStats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
            </Col>
            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Title level={3} className="coin-details-heading">What is {data.name}?</Title>
                    {/* {HTMLReactParser(data.description)} */}
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-heading">{data.name} Links</Title>
                    {data.links.blockchain_site.map((link) => (
                        <Row className="coin-link" key={link.name}>
                            <Title level={5} className="link-name">{link.type}</Title>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                        </Row>
                    ))}
                </Col>
            </Col>
        </Col>
    )
}

