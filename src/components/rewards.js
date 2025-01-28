import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { fetchCustomers, fetchTransactions } from "../data/mock-api";
import { groupByCustomerAndMonth } from "../utils/helper";
import Report from "./rewardsReport";
import AddTransaction from "./addTransaction";
import AddCustomer from "./addCustomer";

function Rewards() {
    const [transactions, setTransactions] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [rewardsData, setRewardsData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([fetchTransactions(), fetchCustomers()]).then(([trans, cust]) => {
            setTransactions(trans);
            setCustomers(cust);
            setRewardsData(groupByCustomerAndMonth(trans, cust));
            setLoading(false);
        });
    }, []);


    const addTransaction = (newTransaction) => {
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);
        setRewardsData(groupByCustomerAndMonth(updatedTransactions, customers));
    };

    const addCustomer = (newCustomer) => {
        setCustomers([...customers, newCustomer]);
    };

    return (
        <Router>
            <div style={{ padding: "20px" }}>
                <h1>Customer Reward Points</h1>
                <nav>
                    <Link to="/">Home</Link> | 
                    <Link to="/report"> View Report</Link> | 
                    <Link to="/add-transaction"> Add Transaction</Link> | 
                    <Link to="/add-customer"> Add Customer</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<h2>Welcome to the Rewards Program</h2>} />
                    <Route path="/report" element={<Report rewardsData={rewardsData} transactions={transactions} loading={loading} customers={customers} />} />
                    <Route path="/add-transaction" element={<AddTransaction addTransaction={addTransaction} customers={customers} />} />
                    <Route path="/add-customer" element={<AddCustomer addCustomer={addCustomer} customers={customers} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Rewards;

