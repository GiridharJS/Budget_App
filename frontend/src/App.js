import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => setTransactions(res.data));
  }, []);

  const addTransaction = (newTx) => {
    axios.post('http://localhost:5000/api/transactions', newTx)
      .then(res => setTransactions([...transactions, res.data]));
  };

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/api/transactions/${id}`)
      .then(() => setTransactions(transactions.filter(tx => tx._id !== id)));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Budget Planner</h1>
        <AddTransaction onAdd={addTransaction} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}

export default App;
