
import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';

const API_URL = "http://localhost:3001/goals";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error('Error loading goals:', err));
  }, []);

  return (
    <div className="App">
      <Overview goals={goals} />
      <AddGoalForm goals={goals} setGoals={setGoals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}

export default App;

