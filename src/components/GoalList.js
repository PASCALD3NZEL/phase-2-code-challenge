import React, { useState } from 'react';
import GoalCard from './GoalCard';
import EditGoalForm from './EditGoalForm';
import DepositForm from './DepositForm';

function GoalList({ goals, onUpdate, onDelete }) {
  const [editingGoal, setEditingGoal] = useState(null);
  const [depositingGoal, setDepositingGoal] = useState(null);

  const handleUpdate = (goalId) => {
    const goal = goals.find(g => g.id === goalId);
    setEditingGoal(goal);
  };

  const handleDeposit = (goalId) => {
    const goal = goals.find(g => g.id === goalId);
    setDepositingGoal(goal);
  };

  return (
    <div className="goal-list">
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={handleUpdate}
          onDelete={onDelete}
          onDeposit={handleDeposit}
        />
      ))}
      
      {editingGoal && (
        <EditGoalForm
          goal={editingGoal}
          onUpdate={onUpdate}
          onClose={() => setEditingGoal(null)}
        />
      )}
      
      {depositingGoal && (
        <DepositForm
          goal={depositingGoal}
          onUpdate={onUpdate}
          onClose={() => setDepositingGoal(null)}
        />
      )}
    </div>
  );
}

export default GoalList;
