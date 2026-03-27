import { emptyCount, modifyCount } from "./useCart";


const testCart = [
    { id: 123, count: 5 }, 
    { id: 456, count: 2 }, 
    { id: 789, count: 0 }, 
]

describe('useCart manipulation functions: ', () => {
    const setCart = vi.fn();

    it('modifyCount increments an an item quantity', () => {
        modifyCount(testCart, setCart, 456, 2)();
        expect(setCart).toHaveBeenCalledWith([
            { id: 123, count: 5 }, 
            { id: 456, count: 4 }, 
            { id: 789, count: 0 }, 
        ])
    })

    it('modifyCount decrements an an item quantity', () => {
        modifyCount(testCart, setCart, 123, -3)();
        expect(setCart).toHaveBeenCalledWith([
            { id: 123, count: 2 }, 
            { id: 456, count: 2 }, 
            { id: 789, count: 0 }, 
        ])
    })

    it('modifyCount works if an item is not present previously', () => {
        modifyCount(testCart, setCart, 321, 3)();
        expect(setCart).toHaveBeenCalledWith([
            { id: 123, count: 5 }, 
            { id: 456, count: 2 }, 
            { id: 789, count: 0 },
            { id: 321, count: 3 },
        ])
    })

    it('modifyCount works if an item is not present previously', () => {
        emptyCount(testCart, setCart, 123)();
        expect(setCart).toHaveBeenCalledWith([
            { id: 123, count: 0 }, 
            { id: 456, count: 2 }, 
            { id: 789, count: 0 },
        ])
    })
})