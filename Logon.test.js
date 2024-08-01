import { render, screen } from '@testing-library/react';
import Logon from './Logon';

test('renders learn react link', () => {
  render(<Logon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
