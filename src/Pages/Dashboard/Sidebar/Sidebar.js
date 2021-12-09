import React from 'react';
import AddService from '../AddService/AddService';
import AllOrders from '../AllOrders/AllOrders';
import CustomerBar from '../CustomerBar/CustomerBar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyReview from '../MyReview/MyReview';
import MyServices from '../MyServices/MyServices';
import Order from '../Order/Order';

const Sidebar = ({ isAdmin, setDisplay }) => {
    //for customer
    const order = [<Order></Order>, 'Order']
    const services = [<MyServices></MyServices>, 'Services']
    const review = [<MyReview></MyReview>, 'Review']

    //for admin
    const allOrder = [<AllOrders></AllOrders>, 'All Orders']
    const addService = [<AddService></AddService>, 'Add Service']
    const makeAdmin = [<MakeAdmin></MakeAdmin>, 'Make Admin']

    return (
        <aside>
            {
                isAdmin ? <CustomerBar setDisplay={setDisplay} features={[allOrder, addService, makeAdmin]}></CustomerBar> : <CustomerBar setDisplay={setDisplay} features={[order, services, review]}></CustomerBar>
            }
        </aside>
    );
};

export default Sidebar;