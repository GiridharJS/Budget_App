import React, { useState } from 'react';

function AddTransaction({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    onAdd({ text, amount: +amount });
    setText('');
    setAmount(0);
  };

  return (
    <form onSubmit={submit} className="space-y-4 mb-6">
      <div>
        <input
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div>
        <input
          type="number"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransaction;
