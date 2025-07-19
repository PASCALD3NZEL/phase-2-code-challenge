import React from 'react';

function GoalCard({ goal, onUpdate, onDelete, onDeposit }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const isCompleted = goal.savedAmount >= goal.targetAmount;

  return (
    <div className={`goal-card ${isCompleted ? 'completed' : ''}`}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Deadline: {goal.deadline}</p>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      
      <p>${goal.savedAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</p>
      <p>{progress.toFixed(1)}% Complete</p>
      
      <div className="goal-actions">
        <button onClick={() => onDeposit(goal.id)}>Add Deposit</button>
        <button onClick={() => onUpdate(goal.id)}>Edit</button>
        <button onClick={() => onDelete(goal.id)}>Delete</button>
      </div>
    </div>
  );
}

export default GoalCard;
