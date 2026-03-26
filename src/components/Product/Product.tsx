import type { ProductType } from "../../data/products";

const formatPrice = (price: number) => 
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(price);

type ProductProps = {
    item: ProductType
}

const Product = ({ item }: ProductProps) => (
    <li>
        <h2>{ item.name }</h2>
        <p>{ item.description }</p>
        <div className='price'>{ formatPrice(item.price) }</div>
    </li>
)

export { Product as default, Product, type ProductProps }