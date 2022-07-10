import { Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCoinsStatsQuery } from '../services/cryptoCoinsApi'

const { Title, Text } = Typography
const { Option } = Select

export const CryptoDetails = () => {
    const { coinId } = useParams()
    const { data, error, isLoading } = useGetCoinsStatsQuery(`coins/${coinId}?tickers=true&market_data=true`)
    console.log(data)
    const [time, setTime] = useState('7d')

    return (
        <div>Crypto Details: {data?.description.en}</div>
    )
}
