/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

test('search form could be use', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { target: { value: 'maddy' } })
  const button = await screen.findByRole('button')
  fireEvent.click(button)
})
