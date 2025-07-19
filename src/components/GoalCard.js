import React from 'react';

function GoalCard({ goal, onUpdate, onDelete, onDeposit }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  
  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>${goal.savedAmount} / ${goal.targetAmount}</p>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <p>Deadline: {goal.deadline}</p>
      <button onClick={() => onDeposit(goal.id)}>Add Deposit</button>
      <button onClick={() => onUpdate(goal.id)}>Edit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
