/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  render(<App />)
  const linkElement = screen.getByText(/Last search/i)
  expect(linkElement).toBeInTheDocument()
})
