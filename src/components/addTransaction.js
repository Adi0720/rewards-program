import React, { useState } from "react";

function AddTransaction({ addTransaction, customers }) {
    const [customerId, setCustomerId] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customerId || !amount || amount <= 0) {
            alert("Please select a customer and enter a valid amount.");
            return;
        }

        const newTransaction = {
            id: Date.now().toString(),
            customerId,
            amount: parseFloat(amount),
            date: new Date().toISOString().split("T")[0],
        };

        addTransaction(newTransaction);
        setCustomerId("");
        setAmount("");
    };

    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer:</label>
                <select value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                </select>

                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
