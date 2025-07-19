import React, { useState } from 'react';

function AddGoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      name: formData.name,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: 0,
      category: formData.category,
      deadline: formData.deadline,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    onAdd(newGoal);
    setFormData({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-goal-form">
      <h2>Add New Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Goal name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target amount"
          value={formData.targetAmount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default AddGoalForm;
