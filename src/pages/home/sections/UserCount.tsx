type Stat = {
    label: string
    suffix?: string
    value: string
}

const stats: Stat[] = [
    { label: 'COUNTRIES', suffix: '+', value: '60' },
    { label: 'LIKES', suffix: 'Mn', value: '7' },
    { label: 'DAYS WARRANTY', suffix: 'Days', value: '365' },
]

const UserCount: React.FC = () => {
    return (
        <section className="bg-center bg-cover bg-no-repeat bg-[url('/images/globe_mobile.png')] lg:bg-[url('/images/globe.png')] flex flex-col gap-16 items-center justify-center 
            px-6 py-14 lg:py-20 w-full"
        >
            {/* Headline */}
            <header className='flex flex-col text-center'>
                <span className='lg:text-2xl text-white text-xs'>Trusted by</span>
                <h2 className='font-bold text-[#99ff00] text-7xl lg:text-[135px]'>200</h2>
                <span className='font-extrabold mt-1 text-white text-xs lg:text-2xl'>MILLION+ USERS</span>
            </header>
            {/* Stats list */}
            <div className='flex flex-col gap-12 lg:flex-row lg:gap-72'>
                {stats.map(({ label, suffix, value }) => (
                    <div className='flex flex-col items-center' key={label}>
                        <h3 className='font-bold lg:text-6xl text-[#99ff00] text-4xl'>
                            {value}
                            {suffix && (
                                <sup className='font-bold relative text-xs lg:text-2xl -top-5 lg:-top-6'>{suffix}</sup>
                            )}
                        </h3>
                        <span className='font-bold text-sm lg:text-base text-white'>{label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UserCount