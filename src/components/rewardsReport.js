import React from "react";

const RewardsReport = ({ rewardsData, loading }) => {

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Rewards Report</h2>
            {Object.keys(rewardsData).map((customerId) => {
                const { name, monthly, transactions } = rewardsData[customerId];
                return (
                    <div key={customerId}>
                        <h3>{name}</h3>
                        {Object.keys(monthly).map(month => (
                            <p key={month}>{month}: {monthly[month]} points</p>
                        ))}
                        <h4>Transactions:</h4>
                        <ul>
                            {transactions.map(({ date, amount, points }, index) => (
                                <li key={index}>{date}: ${amount} → {points} points</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default RewardsReport;
