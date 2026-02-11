import type { Product } from './types'
import ProductRow from './ProductRow'

type Props = {
    products: Product[]
    onEdit: (product: Product) => void
    onDelete: (id: string) => void
}

const ProductsTable = ({ products, onEdit, onDelete }: Props) => (
    <div className='overflow-hidden rounded-lg border border-white'>
        <table className='w-full'>
            <thead className='border-b border-white'>
                <tr>
                    {['Name', 'Category', 'Price', 'Specs', 'Status', 'Actions'].map((h) => (
                        <th className='px-6 py-4 text-left font-medium' key={h}>
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow
                        key={product.id}
                        product={product}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    </div>
)

export default ProductsTable