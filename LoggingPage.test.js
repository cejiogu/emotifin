import { render, screen } from '@testing-library/react';
import LoggingPage from './LoggingPage';

test('renders learn react link', () => {
  render(<LoggingPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
