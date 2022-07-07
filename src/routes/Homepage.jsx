import React from 'react'
// import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Cryptocurrencies } from './Cryptocurrencies'
import { News } from './News'
const { Title } = Typography


export const Homepage = () => {
    const [exchanges, setExchanges] = useState([])
    const [globalStats, setGlobalStats] = useState([])
    const getGlobalStats = () => {
        fetch('https://api.coinpaprika.com/v1/global')
            .then(res => res.json())
            .then(stats => {
                setGlobalStats(stats)

            })
    }

    useEffect(() => {
        getGlobalStats()
    }, [])
    const getExchanges = () => {
        fetch('https://api.coinpaprika.com/v1/exchanges')
            .then(res => res.json())
            .then(exchange => {
                setExchanges(exchange)

            })
    }

    useEffect(() => {
        getExchanges()
    }, [])


    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.cryptocurrencies_number} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={exchanges.length} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={globalStats.market_cap_usd} /></Col>
                <Col span={12}><Statistic title='Total 24hr Volume' value={globalStats.volume_24h_usd} /></Col>
                <Col span={12}><Statistic title='Total 24hr Change in Market Cap' value={`${globalStats.volume_24h_change_24h}%`} /></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto</Title>
                <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

