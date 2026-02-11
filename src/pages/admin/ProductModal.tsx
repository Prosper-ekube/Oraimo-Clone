import { FiX } from 'react-icons/fi'
import type { ProductFormData } from './types'
import { ICON_POOL } from './Icons'

type Props = {
    formData: ProductFormData
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    onIconChange: (spec: 'spec1' | 'spec2', iconKey: string) => void
    onClose: () => void
    onSubmit: () => void
    isEdit?: boolean
}

const ProductModal = ({ formData, onChange, onIconChange, onClose, onSubmit, isEdit }: Props) => {
    const specKeys: ('spec1' | 'spec2')[] = ['spec1', 'spec2']

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'>
            <div className='w-full max-w-lg rounded-xl border border-white bg-black'>
                <div className='flex items-center justify-between border-b border-white p-6'>
                    <h3 className='text-xl font-semibold'>{isEdit ? 'Edit Product' : 'Add Product'}</h3>
                    <button onClick={onClose}><FiX className='h-5 w-5' /></button>
                </div>

                <div className='space-y-5 p-6'>
                    <input name='name' value={formData.name} onChange={onChange} placeholder='Product Name' className='w-full rounded-lg border border-white bg-transparent px-4 py-2.5' />
                    <input name='price' value={formData.price} onChange={onChange} placeholder='Price' className='w-full rounded-lg border border-white bg-transparent px-4 py-2.5' />

                    <select name='category' value={formData.category} onChange={onChange} className='w-full rounded-lg border border-white bg-black px-4 py-2.5 text-white'>
                        <option value=''>Select Category</option>
                        <option value='Audio'>Audio</option>
                        <option value='Wearable'>Wearable</option>
                        <option value='Power'>Power</option>
                        <option value='Personal Care'>Personal Care</option>
                        <option value='Home Appliance'>Home Appliance</option>
                    </select>

                    {specKeys.map((key) => (
                        <div key={key} className='flex gap-2 items-center'>
                            <input
                                name={key}
                                value={formData[key]}
                                onChange={onChange}
                                placeholder={`${key.toUpperCase()} Label`}
                                className='flex-1 rounded-lg border border-white bg-transparent px-4 py-2.5'
                            />
                            <select
                                value={formData[`${key}Icon`] || ''}
                                onChange={(e) => onIconChange(key, e.target.value)}
                                className='rounded-lg border border-white bg-black px-2 py-2 text-white'
                            >
                                <option value=''>Select Icon</option>
                                {Object.keys(ICON_POOL).map((iconKey) => (
                                    <option key={iconKey} value={iconKey}>{iconKey}</option>
                                ))}
                            </select>
                        </div>
                    ))}

                    <input type='file' name='image' accept='image/*' onChange={onChange} className='w-full rounded-lg border border-white bg-transparent px-4 py-2.5 text-white' />
                </div>

                <div className='flex justify-end gap-3 border-t border-white p-6'>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onSubmit} className='rounded-lg bg-[#81e500] px-6 py-2.5 font-medium text-black'>
                        {isEdit ? 'Update' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal