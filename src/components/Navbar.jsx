import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
  
const { Title } = Typography;
const items = [
    { label: <Link to="/" >Home</Link>, icon: <HomeOutlined />, key: 'item-1' }, // remember to pass the key prop
    { label: <Link to="/cryptocurrencies" >Cryptocurrencies</Link>, icon: <FundOutlined />, key: 'item-2' }, // remember to pass the key prop
    { label: <Link to="/exchanges" >Exchanges</Link>, icon: <MoneyCollectOutlined />, key: 'item-3' }, // remember to pass the key prop
    { label: <Link to="/news" >News</Link>, icon: <BulbOutlined />, key: 'item-4' }, // remember to pass the key prop

  ];
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Title level={2} className='logo'>
                    <Link to="/" >Cryptoverse</Link>
                </Title>
            </div>
            <Menu theme="dark" items={items} className=""/>
        </div>
    )
};

export default Navbar