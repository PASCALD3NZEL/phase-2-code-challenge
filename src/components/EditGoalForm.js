import React, { useState } from 'react';

function EditGoalForm({ goal, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    category: goal.category,
    deadline: goal.deadline
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(goal.id, {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount)
    });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="edit-goal-form modal">
      <div className="modal-content">
        <h2>Edit Goal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
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
          <button type="submit">Update Goal</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditGoalForm;
