import React, { useState, useEffect } from 'react';
import './App.css';
import Overview from './components/Overview';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';

const API_URL = "http://localhost:3001/goals";

function App() {
  const [goals, setGoals] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error('Error loading goals:', err));
  }, []);

  const handleAddGoal = (newGoal) => {
    const goalWithId = { ...newGoal, id: Date.now() };
    setGoals([...goals, goalWithId]);
  };

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
      
      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAdd={handleAddGoal} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}

export default App;