import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Storefront header', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /storefront/i })).toBeInTheDocument()
  })
})
