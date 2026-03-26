type ProductType = {
    name: string;
    description: string;
    price: number;
}

const products: ProductType[] = [
    {
        name: 'Orthagonal Omniglot',
        description: 'Our best seller – now 50% more orthagonal!',
        price: 80,
    },
    {
        name: 'Varial Tetromino',
        description: 'As seen alongside Taron Egerton in the major motion picture.',
        price: 4.44
    },
    {
        name: 'Offset HyperGoblin',
        description: 'We don’t remember adding this to the stock list but here he is...',
        price: 19.99
    },
    {
        name: 'Cartesian Vestibule',
        description: 'Description!',
        price: 123.45
    },
    {
        name: 'Escheresque Cutlery',
        description: 'Non-Euclidean dinnertime fun!',
        price: 1699.75
    },
    {
        name: 'Butlerian iPad',
        description: 'While stocks last...',
        price: 620
    },
]

export { products as default, products, type ProductType };
