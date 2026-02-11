import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DashboardHeader from './DashboardHeader'
import DashboardToolbar from './DashboardToolbar'
import ProductsTable from './ProductsTable'
import ProductModal from './ProductModal'
import type { Product, ProductFormData } from './types'

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        category: '',
        price: '',
        spec1: '',
        spec2: '',
        spec1Icon: '',
        spec2Icon: '',
        image: null,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as any
        if (name === 'image') setFormData((prev) => ({ ...prev, image: files[0] }))
        else setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleIconChange = (spec: 'spec1' | 'spec2', iconKey: string) => {
        setFormData((prev) => ({ ...prev, [`${spec}Icon`]: iconKey }))
    }

    const handleSubmit = () => {
        const newProduct: Product = {
            id: editingId || uuidv4(),
            name: formData.name,
            category: formData.category,
            price: parseFloat(formData.price),
            specs: [
                { label: formData.spec1, iconKey: formData.spec1Icon || '' },
                { label: formData.spec2, iconKey: formData.spec2Icon || '' },
            ].filter((s) => s.label),
            status: '',
            image: formData.image ? URL.createObjectURL(formData.image) : '',
        }

        if (editingId) {
            setProducts((prev) => prev.map((p) => (p.id === editingId ? newProduct : p)))
        } else {
            setProducts((prev) => [...prev, newProduct])
        }

        setIsModalOpen(false)
        setEditingId(null)
        setFormData({
            name: '',
            category: '',
            price: '',
            spec1: '',
            spec2: '',
            spec1Icon: '',
            spec2Icon: '',
            image: null,
        })
    }

    const handleEdit = (product: Product) => {
        setEditingId(product.id)
        setFormData({
            name: product.name,
            category: product.category,
            price: product.price.toString(),
            spec1: product.specs[0]?.label || '',
            spec2: product.specs[1]?.label || '',
            spec1Icon: product.specs[0]?.iconKey || '',
            spec2Icon: product.specs[1]?.iconKey || '',
            image: null,
        })
        setIsModalOpen(true)
    }

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts((prev) => prev.filter((p) => p.id !== id))
        }
    }

    const filteredProducts = products.filter(
        (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className='min-h-screen bg-black text-white'>
            <DashboardHeader />
            <main className='px-8 py-8'>
                <DashboardToolbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onAdd={() => {
                        setEditingId(null)
                        setFormData({
                            name: '',
                            category: '',
                            price: '',
                            spec1: '',
                            spec2: '',
                            spec1Icon: '',
                            spec2Icon: '',
                            image: null,
                        })
                        setIsModalOpen(true)
                    }}
                />
                <ProductsTable products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
            </main>

            {isModalOpen && (
                <ProductModal
                    formData={formData}
                    onChange={handleInputChange}
                    onIconChange={handleIconChange}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    isEdit={Boolean(editingId)}
                />
            )}
        </div>
    )
}

export default Dashboard