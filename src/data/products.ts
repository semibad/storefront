type ProductType = {
    id: number,
    name: string;
    description: string;
    price: number;
}

const products: ProductType[] = [
    {
        id: 0,
        name: 'Orthagonal Omniglot',
        description: 'Our best seller – now 50% more orthagonal!',
        price: 80,
    },
    {
        id: 1,
        name: 'Varial Tetromino',
        description: 'As seen alongside Taron Egerton in the major motion picture.',
        price: 4.44
    },
    {
        id: 2,
        name: 'Offset HyperGoblin',
        description: 'We don’t remember adding this to the stock list but here he is...',
        price: 19.99
    },
    {
        id: 3,
        name: 'Cartesian Vestibule',
        description: 'Description!',
        price: 123.45
    },
    {
        id: 4,
        name: 'Escheresque Cutlery',
        description: 'Non-Euclidean dinnertime fun!',
        price: 1699.75
    },
    {
        id: 5,
        name: 'Butlerian iPad',
        description: 'While stocks last...',
        price: 620
    },
]

export { products as default, products, type ProductType };
