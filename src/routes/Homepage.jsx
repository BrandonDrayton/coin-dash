import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useGetGlobalStatsQuery } from '../services/cryptoGlobalApi'
import { Cryptocurrencies10 } from '../components/CryptoCurrencies10'
import { Watchlist } from './Watchlist'
const { Title } = Typography

export const Homepage = () => {
    const { data, error, isLoading } = useGetGlobalStatsQuery('global')

    if (isLoading) return null
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={data.data.active_cryptocurrencies} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={data.data.markets} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(data?.data.total_market_cap.usd ?? 0)} /></Col>
                <Col span={12}><Statistic title='Total 24hr Volume' value={millify(data?.data.total_volume.usd ?? 0)} /></Col>
                <Col span={12}><Statistic title='Total 24hr Change in Market Cap' value={millify(data.data.market_cap_change_percentage_24h_usd) + '%'} /></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Crypto</Title>
                <Title level={3} className='show-more'><Button><Link to='/cryptocurrencies'>Show More</Link></Button></Title>
            </div>
            <Cryptocurrencies10 />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Watchlist</Title>
                <Title level={3} className='show-more'><Link to='/watchlist'>Show More</Link></Title>
            </div>
            <Watchlist />
        </>
    )
}

