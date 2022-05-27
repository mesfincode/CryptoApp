import React,{useState} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
    const {data: cryptosList, isFetching} = useGetCryptosQuery(10);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    console.log(cryptos);
  return (
    <div>Cryptocurrencies</div>
  )
}

export default Cryptocurrencies