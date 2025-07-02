import React from 'react';

function TransactionList({ transactions, onDelete }) {
  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Total Balance: ₹{total}
      </h2>
      <ul className="space-y-3">
        {transactions.map(tx => (
          <li
            key={tx._id}
            className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-gray-50"
          >
            <span className="font-medium text-gray-800">
              {tx.text} — ₹{tx.amount}
            </span>
            <button
              onClick={() => onDelete(tx._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
