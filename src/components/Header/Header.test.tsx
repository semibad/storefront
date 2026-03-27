import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe('Dynamic Header with Cart view: ', () => {

    const noItemsText = 'No items in your cart yet, add some!';
    const baseProduct = {
        increment: vi.fn(),
        decrement: vi.fn(),
        empty: vi.fn(),
    }
    const products = [
        {
            ...baseProduct,
            id: 123,
            name: 'OneTwoThree',
            description: 'One Two Three!',
            price: 123,
            count: 2,
            subtotal: 246,
        },
        {
            ...baseProduct,
            id: 456,
            name: 'FourFiveSix',
            description: 'Four Five Six...',
            price: 456,
            count: 3,
            subtotal: 1368
        }
    ]
    
    it('works correctly when no products have been added to the cart', async () => {
        render(<Header total={0} products={[]} />);
        const cartButton = screen.getByRole('button', { name: /£0.00/i});
        // check it's in a proper state – shouldn't be showing the cart modal
        expect(screen.queryByText(noItemsText)).not.toBeInTheDocument();
        // click the cart button, should see the message
        await userEvent.click(cartButton);
        expect(screen.getByText(noItemsText)).toBeInTheDocument();
    })
    
    it('works correctly when products have been added to the cart', async () => {
        render(<Header total={1614} products={products} />);
        const cartButton = screen.getByRole('button', { name: /£1,614.00/i}); // (123 * 2) + (456 * 3)
        // check it's in a proper state – shouldn't be showing the cart modal
        expect(screen.queryByText(noItemsText)).not.toBeInTheDocument();
        // click the cart button, should see the table
        await userEvent.click(cartButton);
        expect(screen.getByText('£246.00')).toBeInTheDocument();
        expect(screen.getByText('£1,368.00')).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: '£1,614.00' })).toBeInTheDocument();
         // click the cart button, should see the table
         await userEvent.click(cartButton);
         expect(screen.queryByRole('cell', { name: '£1,614.00' })).not.toBeInTheDocument();
    })

});