import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import Navbar from './components/Navbar'
import { Exchanges, Homepage, Cryptocurrencies, CryptoDetails, CompaniesList } from './routes'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/exchanges' element={<Exchanges />} />
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route path='/companiesList' element={<CompaniesList />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Crypto Dash<br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/companiesList'>Companies</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App