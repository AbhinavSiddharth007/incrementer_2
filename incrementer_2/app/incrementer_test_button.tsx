import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import IncrementerButton from './incrementer_button';

describe('IncrementerButton', () => {
  it('renders with initial count of 0', () => {
    render(<IncrementerButton />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments the counter', async () => {
    render(<IncrementerButton />);
    await userEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements the counter', async () => {
    render(<IncrementerButton />);
    await userEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  });

  it('clears the counter back to 0', async () => {
    render(<IncrementerButton />);
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('Reset'));
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});