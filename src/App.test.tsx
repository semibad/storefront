import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Main storefront view: ', () => {

  it('smoke test', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /storefront/i })).toBeInTheDocument()
  })

})
