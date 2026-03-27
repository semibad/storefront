import { formatPrice } from "@utils";

describe('utility functions ', () => {

    it('formatPrice formats currency values correctly', () => {
        expect(formatPrice(123.45)).toBe('£123.45');
        expect(formatPrice(123.4567890)).toBe('£123.46');
        expect(formatPrice(123.4)).toBe('£123.40');
        expect(formatPrice(123)).toBe('£123.00');
        expect(formatPrice(1234567.89)).toBe('£1,234,567.89');
        expect(formatPrice(0)).toBe('£0.00');
    })

});