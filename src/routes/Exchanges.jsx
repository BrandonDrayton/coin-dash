import { Typography, Avatar, Collapse, Row, Col, Skeleton } from 'antd'
import millify from 'millify'
import React from 'react'
import { useGetExchangeStatsQuery } from '../services/cryptoExchangesApi'
import './Exchanges.css'


const { Panel } = Collapse
const { Text } = Typography

export const Exchanges = () => {
    const { data, error, isLoading } = useGetExchangeStatsQuery('exchanges')
    console.log(data)
    if (isLoading) return <Skeleton />
    return (
        <>
            <Row>
                <Col span={5}>Exchanges</Col>
                <Col span={5}>24h Trade Volume</Col>
                <Col span={5}>Trust Score</Col>
                <Col span={5}>Trust Score Rank</Col>
                <Col span={4}>Established</Col>
            </Row>
            <Row>
                {data.map((exchange, i) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={i}
                                showArrow={false}
                                header={(
                                    <Row key={i} >
                                        <Col span={5}>
                                            <Text><strong>{i + 1}. </strong></Text>
                                            <Avatar className="exchange-image" src={exchange.image} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col className='exchangeSpan' span={5}>${millify(exchange.trade_volume_24h_btc)}</Col>
                                        <Col className='exchangeSpan' span={5}>{exchange.trust_score}</Col>
                                        <Col className='exchangeSpan' span={5}>{exchange.trust_score_rank}</Col>
                                        <Col className='exchangeSpan' span={4}>{exchange.year_established}</Col>
                                    </Row>
                                )}
                            >
                                <a href={exchange.url}>{exchange.url}</a>
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}
