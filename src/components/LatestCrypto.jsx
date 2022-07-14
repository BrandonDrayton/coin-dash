import { Card, Col, Row } from 'antd'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendingCoinsQuery } from '../services/cryptoCoinsApi'

function LatestCrypto() {
    const { data, error, isLoading } = useGetTrendingCoinsQuery('')
    if (isLoading) return null
    return (
        <>
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {data.coins.map((coin) => (
                    <Col xs={24} sm={12} lg={6} key={coin.item.coin_id}>
                        <Link to={`/crypto/${coin.item.id}`}>
                            <Card
                                title={`${coin.item.market_cap_rank}. ${coin.item.name}`}
                                extra={<img className='crypto-image' src={coin.item.thumb} alt='crypto' />}
                                hoverable
                            >
                                <p>Price: {millify(coin.item.price_btc, { precision: 7, units: ['BTC'] })}</p>
                                <p>Market Cap Rank: {millify(coin.item.market_cap_rank)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

export default LatestCrypto