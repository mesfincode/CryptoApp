import React from 'react'
import millify from 'millify'
import { Typography, Row,Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery  } from '../services/cryptoApi'
const {Title} = Typography;
const Home = () => {
    const {data, isFetching} = useGetCryptosQuery (10);
    const globalStats = data?.data?.stats;
    if(isFetching) return 'Loading......'
    console.log(data);
  return (
    <>
       <Title level={2} className='heading'> Global Crypto Stats</Title>
       <Row>
           <Col span={12}> <Statistic title="Total Cryptocurrencies" value ={globalStats.total}></Statistic></Col>
           <Col span={12}> <Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)}></Statistic></Col>
           <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
           <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
           <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>

       </Row>
    </>
  )
}

export default Home
