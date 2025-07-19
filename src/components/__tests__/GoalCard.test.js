import { render, screen } from '@testing-library/react';
import GoalCard from '../GoalCard';

test('renders goal card with goal name', () => {
  const mockGoal = {
    id: '1',
    name: 'Test Goal',
    targetAmount: 1000,
    savedAmount: 500,
    category: 'Test',
    deadline: '2024-12-31'
  };

  render(<GoalCard goal={mockGoal} onUpdate={() => {}} onDelete={() => {}} onDeposit={() => {}} />);
  expect(screen.getByText('Test Goal')).toBeInTheDocument();
});