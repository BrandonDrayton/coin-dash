import { Select, Typography, Col, Row } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LineGraph from '../components/LineGraph'
import { useGetCoinsStatsQuery } from '../services/cryptoCoinsApi'

const { Title, Text } = Typography
const { Option } = Select

export const CryptoDetails = () => {
    const { coinId } = useParams()
    const { data, error, isLoading } = useGetCoinsStatsQuery(`coins/${coinId}?tickers=true&market_data=true`)
    console.log(data)
    const [timePeriod, setTimePeriod] = useState('7d')
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
    return (
        // <Col className="coin-detail-container">
        //     <Col className="coin-heading-container">
        //         <Title level={2} className="coin-name">
        //             {data?.name} ({data?.symbol}) Price
        //         </Title>
        //         <p>{data.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
        //     </Col>
        //     <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
        //         {time.map((date) => <Option key={date}>{date}</Option>)}
        //     </Select>
        //     <LineGraph coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
        //     <Col className="stats-container">
        //         <Col className="coin-value-statistics">
        //             <Col className="coin-value-statistics-heading">
        //                 <Title level={3} className="coin-details-heading">{cryptoDetails.name} Value Statistics</Title>
        //                 <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
        //             </Col>
        //             {stats.map(({ icon, title, value }) => (
        //                 <Col className="coin-stats">
        //                     <Col className="coin-stats-name">
        //                         <Text>{icon}</Text>
        //                         <Text>{title}</Text>
        //                     </Col>
        //                     <Text className="stats">{value}</Text>
        //                 </Col>
        //             ))}
        //         </Col>
        //         <Col className="other-stats-info">
        //             <Col className="coin-value-statistics-heading">
        //                 <Title level={3} className="coin-details-heading">Other Stats Info</Title>
        //                 <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
        //             </Col>
        //             {genericStats.map(({ icon, title, value }) => (
        //                 <Col className="coin-stats">
        //                     <Col className="coin-stats-name">
        //                         <Text>{icon}</Text>
        //                         <Text>{title}</Text>
        //                     </Col>
        //                     <Text className="stats">{value}</Text>
        //                 </Col>
        //             ))}
        //         </Col>
        //     </Col>
        //     <Col className="coin-desc-link">
        //         <Row className="coin-desc">
        //             <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
        //             {HTMLReactParser(cryptoDetails.description)}
        //         </Row>
        //         <Col className="coin-links">
        //             <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
        //             {cryptoDetails.links?.map((link) => (
        //                 <Row className="coin-link" key={link.name}>
        //                     <Title level={5} className="link-name">{link.type}</Title>
        //                     <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
        //                 </Row>
        //             ))}
        //         </Col>
        //     </Col>
        // </Col>
        <></>
    )
}

