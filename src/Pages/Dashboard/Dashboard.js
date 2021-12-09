import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/logo.png';
import AllOrders from './AllOrders/AllOrders';
import './Dashboard.css';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [display, setDisplay] = useState(null);


    useEffect(() => {
        fetch(`https://agile-escarpment-45536.herokuapp.com/getAdmin?email=` + user.email)
            .then(response => response.json())
            .then(data => {
                setIsAdmin(data)
                data ? setDisplay(<AllOrders></AllOrders>) : setDisplay(<Order></Order>)
            })
    }, [])
    return (
        <section id="customer">
            <div className="navbar d-flex justify-content-between py-3 px-0 px-sm-5">
                <Link to="/">
                    <img src={logo} width="120px" alt="" />
                </Link>
                <span className="h4">{user.name}</span>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar isAdmin={isAdmin} setDisplay={setDisplay}></Sidebar>
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;