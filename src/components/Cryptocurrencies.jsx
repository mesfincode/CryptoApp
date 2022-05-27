import React,{useState} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Typography, Row,Col, Statistic,Card } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'


const Cryptocurrencies = () => {
    const {data: cryptosList, isFetching} = useGetCryptosQuery(10);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    console.log(cryptos);
  return (
    <> 
      <Row gutters={[32,32]} className="crypto-card-container">
           { cryptos.map((currency)=>(
               <Col xs={24} sm={12} lg={6} className="crypto-card" key ={currency.id}>
                   <Link to={`/crypto/${currency.id}`}>
                        <Card 
                           title={`${currency.rank}. ${currency.name}`}
                           extra={<img className="crypto-image" src={currency.iconUrl}/>}
                        >
                         <p>Price: {millify(currency.price)}</p>
                         <p>Market Cap: {millify(currency.marketCap)}</p>

                         <p>Daily change: {millify(currency.change)}%</p>

                        </Card>
                   </Link>
               </Col>
           ))

           }
      </Row>
    </>
  )
}

export default Cryptocurrencies