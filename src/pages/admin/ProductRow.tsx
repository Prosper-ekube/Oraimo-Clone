import type { Product } from './types'
import { FiEdit } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

type Props = {
    product: Product
    onEdit: (product: Product) => void
    onDelete: (id: string) => void
}

const ProductRow = ({ product, onEdit, onDelete }: Props) => (
    <tr className='border-b border-white hover:bg-gray-900/30'>
        <td className='px-6 py-4'>{product.name}</td>
        <td className='px-6 py-4'>{product.category}</td>
        <td className='px-6 py-4'>${product.price.toFixed(2)}</td>
        <td className='px-6 py-4'>{product.specs.join(', ')}</td>
        <td className='px-6 py-4'>{product.status}</td>
        <td className='px-6 py-4'>
            <div className='flex justify-end gap-2'>
                <button
                    className='flex items-center gap-1.5 rounded border border-[#81e500] px-4 py-1.5 text-sm text-[#81e500] hover:bg-[#81e500]/10'
                    onClick={() => onEdit(product)}
                >
                    <FiEdit className='h-3.5 w-3.5' /> Edit
                </button>
                <button
                    className='flex items-center gap-1.5 rounded border border-red-600 px-4 py-1.5 text-sm text-red-500 hover:bg-red-600/10'
                    onClick={() => onDelete(product.id)}
                >
                    <FiTrash2 className='h-3.5 w-3.5' /> Delete
                </button>
            </div>
        </td>
    </tr>
)

export default ProductRow