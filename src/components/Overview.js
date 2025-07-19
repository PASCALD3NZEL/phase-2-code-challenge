import React from 'react';

function Overview({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const overallProgress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  return (
    <div className="overview">
      <h1>Savings Goals Tracker</h1>
      <div className="stats">
        <div className="stat">
          <h3>Total Goals</h3>
          <p>{totalGoals}</p>
        </div>
        <div className="stat">
          <h3>Completed</h3>
          <p>{completedGoals}</p>
        </div>
        <div className="stat">
          <h3>Total Saved</h3>
          <p>${totalSaved.toLocaleString()}</p>
        </div>
        <div className="stat">
          <h3>Overall Progress</h3>
          <p>{overallProgress.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;