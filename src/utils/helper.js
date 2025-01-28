export const calculateRewards = (amount) => {
    let points = 0;
    if (amount > 100) {
        points += 2 * (amount - 100);
        amount = 100;
    }
    if (amount > 50) {
        points += (amount - 50);
    }
    return points;
};

export const groupByCustomerAndMonth = (transactions, customers) => {
    const rewards = {};

    transactions.forEach(({ customerId, amount, date }) => {
        const customer = customers.find(c => c.id === customerId);
        const customerName = customer ? customer.name : "Unknown";

        const month = new Date(date).toLocaleString("default", { month: "long", year: "numeric" });

        if (!rewards[customerId]) {
            rewards[customerId] = { name: customerName, monthly: {}, transactions: [] };
        }
        if (!rewards[customerId].monthly[month]) {
            rewards[customerId].monthly[month] = 0;
        }

        const points = calculateRewards(amount);
        rewards[customerId].monthly[month] += points;
        rewards[customerId].transactions.push({ date, amount, points });
    });

    return rewards;
};
