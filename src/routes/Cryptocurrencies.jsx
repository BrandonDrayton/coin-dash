import React, { useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useState } from 'react'

export const Cryptocurrencies = () => {
    const [cryptoArray, setCryptoArray] = useState([])
    const apiKey = '3d54eac54c5e41a4d8f08cee4e646b32884568f8'
    const getCryptoArray = () => {
        fetch('https://api.coinpaprika.com/v1/coins')
            .then(res => res.json())
            .then(coin => {
                setCryptoArray(coin)

            })
    }

    useEffect(() => {
        getCryptoArray()
    }, [])
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
    const [api, setApi] = useState([])
    const getNewApi = () => {
        fetch(`https://api.coinpaprika.com/v1/tickers`)
            .then(res => res.json())
            .then(r => {
                setApi(r)
                console.log(r)
            })
    }

    useEffect(() => {
        getNewApi()
    }, [])
    const price = api.map((coin, index) => (
        index < 10 &&
        coin.quotes.USD.price
    ))
    console.log(price)
    return (
        <>
            <Row gutters={[32, 32]} className='crypto-card-container'>
                {cryptoArray.map((coin, index) => (
                    index < 10 &&
                    <Col xs={24} sm={12} lg={6} key={coin.id}>
                        <Link to={`/crypto/${coin.id}`}>
                            <Card
                                title={`${coin.rank}. ${coin.name}`}
                                hoverable
                            >
                                <p>Price: {Math.round((price[index] + Number.EPSILON) * 10000) / 10000}</p>
                            </Card>
                        </Link>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

