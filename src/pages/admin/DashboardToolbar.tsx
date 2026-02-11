import { FiSearch } from 'react-icons/fi'

type Props = {
    searchQuery: string
    onSearchChange: (value: string) => void
    onAdd: () => void
}

const DashboardToolbar = ({ searchQuery, onSearchChange, onAdd }: Props) => (
    <div className='mb-6 flex items-center justify-between'>
        <div className='relative flex-1 max-w-md'>
            <FiSearch className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2' />
            <input
                className='w-full rounded-lg border border-white bg-transparent px-10 py-2.5 text-white placeholder-white focus:outline-none'
                placeholder='Search products'
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>

        <button
            className='ml-4 flex items-center gap-2 rounded-lg bg-[#81e500] px-6 py-2.5 font-medium text-black hover:opacity-90'
            onClick={onAdd}
        >
            <span className='text-xl'>+</span>
            Add Product
        </button>
    </div>
)

export default DashboardToolbar
