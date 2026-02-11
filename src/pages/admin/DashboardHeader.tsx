const DashboardHeader: React.FC = () => (
    <header className='border-b border-white px-8 py-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded-full bg-[#81e500]' />
                <h1 className='text-xl font-semibold'>Oraimo Admin</h1>
            </div>

            <nav className='flex gap-8'>
                <a className='font-medium text-[#81e500]' href='#'>Products</a>
                <a className='hover:text-gray-300' href='#'>Manage Oraimo Products</a>
            </nav>
        </div>
    </header>
)

export default DashboardHeader