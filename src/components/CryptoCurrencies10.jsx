import React, { useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useState } from 'react'


export const Cryptocurrencies10 = () => {
    const [cryptoArray, setCryptoArray] = useState([])
    const getCryptoArray = () => {
        fetch('https://api.coingecko.com/api/v3/coins')
            .then(res => res.json())
            .then(coins => {
                setCryptoArray(coins)
            })
    }

    useEffect(() => {
        getCryptoArray()
    }, [])
    return (
        <>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptoArray.filter((e) => e.market_data.market_cap_rank < 11).map((coin) => (
                    <Col xs={24} sm={12} lg={6} key={coin.localization.en}>
                        <Link to={`/crypto/${coin.id}`}>
                            <Card
                                title={`${coin.market_data.market_cap_rank}. ${coin.name}`}
                                extra={<img className='crypto-image' src={coin.image.thumb} alt='crypto' />}
                                hoverable
                            >
                                <p>Price: {millify(coin.market_data.current_price.usd, { precision: 4, units: ['USD'] })}</p>
                                <p>Market Cap: {millify(coin.market_data.market_cap.usd)}</p>
                                <p>Daily Change: {millify(coin.market_data.market_cap_change_percentage_24h)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

