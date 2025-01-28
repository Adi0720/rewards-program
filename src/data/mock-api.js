export const fetchCustomers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: "101", name: "user 1" },
                { id: "102", name: "user 2" },
                { id: "103", name: "user 3" },
            ]);
        }, 500);
    });
};

export const fetchTransactions = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, customerId: "101", amount: 120, date: "2024-01-15" },
                { id: 2, customerId: "101", amount: 75, date: "2024-01-20" },
                { id: 3, customerId: "102", amount: 110, date: "2024-02-05" },
                { id: 4, customerId: "102", amount: 60, date: "2024-02-18" },
                { id: 5, customerId: "103", amount: 130, date: "2024-03-03" },
                { id: 6, customerId: "103", amount: 90, date: "2024-03-22" },
                { id: 7, customerId: "101", amount: 200, date: "2024-03-28" },
                { id: 8, customerId: "102", amount: 50, date: "2024-03-30" },
            ]);
        }, 1000);
    });
};
