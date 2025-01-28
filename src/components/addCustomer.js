import React, { useState } from "react";

function AddCustomer({ addCustomer, customers }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please enter a name");
            return;
        }
        
        const isExisting = customers.some(c => c.name.toLowerCase() === name.toLowerCase());

        if (isExisting) {
            alert("Customer already exists!");
            return;
        }

        const newCustomer = {
            id: Date.now().toString(),
            name,
        };

        addCustomer(newCustomer);
        setName("");
    };

    return (
        <div>
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
}

export default AddCustomer;
