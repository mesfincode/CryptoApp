import { useState } from 'react'
import {Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar,Exchanges,CryptoDetails,Cryptocurrencies,News} from './components'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
          <Layout>
            <div className="routes">
            <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exchanges" element={<Exchanges />} />
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route exact path="/news" element={<News />} />

        </Routes>
            </div>
          </Layout>
      
      </div>
    </div>
<div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  
  )
}

export default App
