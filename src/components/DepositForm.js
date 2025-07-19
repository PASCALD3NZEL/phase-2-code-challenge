import React, { useState } from 'react';

function DepositForm({ goal, onUpdate, onClose }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    
    if (depositAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    onUpdate(goal.id, {
      savedAmount: goal.savedAmount + depositAmount
    });
    onClose();
  };

  return (
    <div className="deposit-form modal">
      <div className="modal-content">
        <h2>Add Deposit to {goal.name}</h2>
        <p>Current: ${goal.savedAmount} / ${goal.targetAmount}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="0.01"
            placeholder="Deposit amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Add Deposit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default DepositForm;
