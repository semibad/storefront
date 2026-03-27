import { render, screen, cleanup } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';
import { App } from './App'

describe('Main storefront view: ', () => {

  afterEach(cleanup)

  it('smoke test', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /storefront/i })).toBeInTheDocument()
  })

  it('shows products and allows user to set cart quantities via Product cards', async () => {
    render(<App />);
    // get the product list
    const products = screen.getAllByRole('listitem');
    expect(products).toHaveLength(6);
    expect(screen.getAllByText('0 in basket')).toHaveLength(6); // nothing in any of the baskets
    // get the header cart button
    const cartButton = screen.getByRole('button', { name: /£0.00/i});
    // add some items to the cart
    const inc = screen.getAllByRole('button', { name: '+'});
    expect(inc).toHaveLength(6);
    await userEvent.click(inc[0]); // 1 of product 1
    await userEvent.click(inc[0]); // 2 of product 1
    await userEvent.click(inc[5]); // 1 of product 6
    expect(screen.getAllByText('0 in basket')).toHaveLength(4);
    expect(screen.getAllByText('1 in basket')).toHaveLength(1);
    expect(screen.getAllByText('2 in basket')).toHaveLength(1);
    expect(cartButton).toHaveTextContent(/£780.00/i);
    // add some more, then remove / clear
    const dec = screen.getAllByRole('button', { name: '-'});
    const clear = screen.getAllByRole('button', { name: '×'});
    await userEvent.click(inc[4]); // 1 of product 5
    await userEvent.click(inc[4]); // 2 of product 5
    expect(cartButton).toHaveTextContent(/£4,179.50/i);
    await userEvent.click(dec[4]); // 1 of product 5 again
    expect(cartButton).toHaveTextContent(/£2,479.75/i);
    await userEvent.click(clear[0]); // 0 of product 1
    expect(cartButton).toHaveTextContent(/£2,319.75/i);
  })
  
})
