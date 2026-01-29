import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { CiHeadphones } from 'react-icons/ci'
import { FaBars, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { GiBlender } from 'react-icons/gi'
import { GoShieldCheck } from 'react-icons/go'
import { HiOutlineBolt } from 'react-icons/hi2'
import { LiaTimesSolid } from 'react-icons/lia'
import { MdOutlineStorefront } from 'react-icons/md'
import { PiWatchLight } from 'react-icons/pi'
import { RxTriangleDown } from 'react-icons/rx'
import { TbRazorElectric, TbTruckDelivery } from 'react-icons/tb'
import oraimoLogo from '../../assets/images/oraimo_icon.png'

type MenuItem = {
    dropdown?: DropdownItem[]
    name: string
    path: string
}

type DropdownItem = {
    external?: boolean
    href?: string       // external link
    label: string
    path?: string       // internal route    
}

const Navbar: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string | null>(null)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const closeTimeoutRef = useRef<number | null>(null)
    

    const menuItems: MenuItem[] = [
        {
            name: 'PRODUCT',
            path: '/product',
            dropdown: [
                { label: 'Audio', path: '/products/audio' },
                { label: 'Wearable', path: '/products/wearable' },
                { label: 'Power', path: '/products/power' },
                { label: 'Personal Care', path: '/products/personal-care' },
                { label: 'Home Appliances', path: '/products/home-appliances' }
            ]
        },
        { name: 'ABOUT US', path: '/about' },
        { name: 'NEWSROOM', path: '/newsroom' },
        {
            name: 'SHOPPING',
            path: '/shopping',
            dropdown: [
                { label: 'Exclusive Stores', path: '/shopping/stores' },
                { label: 'Shop Online', path: '/shopping/OnlineStores' }
            ]
        },
        {
            name: 'SUPPORT',
            path: '/support',
            dropdown: [
                { label: 'Download the App', path: '/support/OraimoApps' },
                { label: 'Authentication', path: '/support/ProductAuth' },
                { label: 'Warranty Policy ', path: '/support/WarrantyPolicy' }
            ]
        },
        {
            name: 'EXPLORE WITH US',
            path: '/explore',
            dropdown: [
                { label: 'oraimo', href: 'https://web.facebook.com/oraimoNigeria', external: true },
                { label: 'oraimoclub', href: 'https://www.instagram.com/oraimoclub', external: true },
                { label: 'oraimonigeria', href: 'https://www.tiktok.com/@oraimonigeria', external: true },
                { label: 'oraimo ', href: 'https://www.youtube.com/@OraimoMate', external: true }
            ]
        }
    ]    

    const dropdownIcons: Record<string, ReactNode> = {
        'Audio': <CiHeadphones />,
        'Exclusive Stores': <MdOutlineStorefront />,
        'Home Appliances': <GiBlender />,
        'oraimo': <FaFacebookF />,
        'oraimo ': <FaYoutube />,
        'oraimoclub': <FaInstagram />,
        'oraimonigeria': <FaTiktok />,
        'Personal Care': <TbRazorElectric />,
        'Power': <HiOutlineBolt />,
        'Shop Online': <TbTruckDelivery />,
        'Warranty Policy': <GoShieldCheck />,
        'Wearable': <PiWatchLight />
    }

    return (
        <nav className='bg-black fixed left-0 top-0 w-full z-50 shadow-md'>
            <div className='flex items-center justify-between max-w-6xl mx-auto p-4 md:p-8 lg:p-6'>
                <NavLink to='/'><img alt='Oraimo Logo' className='w-14 md:w-20 lg:w-23' src={oraimoLogo} /></NavLink>
                {/* Desktop menu */}
                <ul className='hidden lg:flex gap-14 items-center'>
                    {menuItems.map(item => (
                        <li className='relative' key={item.name}
                            onMouseEnter={() => {
                                if (closeTimeoutRef.current) {
                                    clearTimeout(closeTimeoutRef.current)
                                    closeTimeoutRef.current = null
                                }
                                item.dropdown && setActiveNav(item.name)
                            }}

                            onMouseLeave={() => {
                                closeTimeoutRef.current = window.setTimeout(() => {
                                    setActiveNav(null)
                                }, 200)
                            }}
                        >
                            <NavLink className={({ isActive }) => `relative inline-block font-semibold text-sm transition-colors text-white ${isActive ? 'text-[#81e500]' : ''}
                                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[20px] after:w-[7.5rem] after:h-[0.6rem] 
                                    after:bg-[url('/images/nav-btn-elipse.png')] after:bg-cover after:bg-no-repeat after:opacity-0 after:transition-all
                                    after:duration-1000 hover:after:opacity-100 ${isActive ? 'after:opacity-100' : ''}`} to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* Dropdown */}
                {activeNav && (
                    <div className='absolute left-0 top-full w-full bg-[#131415] rounded-b-3xl px-auto'
                        onMouseEnter={() => {
                            if (closeTimeoutRef.current) {
                                clearTimeout(closeTimeoutRef.current)
                                closeTimeoutRef.current = null
                            }
                        }}

                        onMouseLeave={() => {
                            closeTimeoutRef.current = window.setTimeout(() => {
                                setActiveNav(null)
                            }, 200)
                        }}
                    >
                        <div className='grid place-items-center max-w-7xl mx-auto py-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                            {menuItems.find(item => item.name === activeNav)?.dropdown?.map((subItem, index, arr) => (
                                <div className={`flex justify-center w-full h-full ${index !== arr.length - 1 ? 'border-r border-[#2b2f31]' : ''}`} key={subItem.label}>
                                    {subItem.external ? (
                                        <a className='duration-1000 flex flex-col items-center justify-center gap-3 text-[#858a8c] hover:text-[#81e500] transition-colors'
                                            href={subItem.href} rel='noopener noreferrer' target='_blank'
                                        >
                                            <div className='text-5xl'>{dropdownIcons[subItem.label]}</div>
                                            <span className='font-medium text-sm'>{subItem.label}</span>
                                        </a>
                                    ) : (
                                        <NavLink className='duration-1000 flex flex-col items-center justify-center gap-3 text-[#858a8c] hover:text-[#81e500] transition-colors'
                                            to={subItem.path!}
                                        >
                                            <div className='text-5xl'>{dropdownIcons[subItem.label]}</div>
                                            <span className='font-medium text-sm'>{subItem.label}</span>
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* Mobile toggle */}
                <div className='lg:hidden' onClick={() => { setIsMobileOpen(prev => !prev); setOpenDropdown(null) }}>
                    {isMobileOpen ? <LiaTimesSolid className='text-xl md:text-4xl' color='white' /> : <FaBars className='text-xl md:text-4xl' color='white' />}
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`lg:hidden bg-[#1b1d1e] overflow-hidden transition-all duration-300 ${isMobileOpen ? 'h-screen' : 'h-0'}`}>
                <ul className='flex flex-col gap-3 md:gap-7 px-6 md:px-12 pt-2 md:pt-7'>
                    {menuItems.map((item, index) => {
                        const isOpen = openDropdown === item.name
                        const isLastItem = index === menuItems.length - 1
                        return (
                            <li className={`${isLastItem ? '' : 'border-b-[1px] border-[#323537]'} flex flex-col pb-3 md:pb-7`} key={item.name}>
                                <button className='flex items-center gap-1 font-bold text-xs md:text-xl text-[#858a8c]'
                                    onClick={() => {
                                        if (!item.dropdown) {
                                            setIsMobileOpen(false)
                                            return
                                        }
                                        setOpenDropdown(prev => (prev === item.name ? null : item.name))
                                    }}
                                >
                                    {item.name}
                                    {item.dropdown && <RxTriangleDown className={`md:text-3xl text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                                </button>
                                {/* Dropdown */}
                                {item.dropdown && isOpen && (
                                    <ul className='grid grid-cols-3 gap-x-1 gap-y-6 py-4 text-center'>
                                        {item.dropdown.map(subItem => (
                                            <li key={subItem.label}>
                                                {subItem.external ? (
                                                    <a className='flex flex-col items-center gap-2 text-[11px] md:text-lg text-[#858a8c]'
                                                        href={subItem.href} onClick={() => setIsMobileOpen(false)} rel='noopener noreferrer' target='_blank'
                                                    >
                                                        <div className='text-2xl md:text-6xl text-[#e5e7eb]'>{dropdownIcons[subItem.label]}</div>
                                                        {subItem.label}
                                                    </a>
                                                ) : (
                                                    <NavLink className='flex flex-col items-center gap-2 text-[11px] md:text-lg text-[#858a8c]'
                                                            onClick={() => setIsMobileOpen(false)} to={subItem.path!}
                                                    >
                                                        <div className='text-2xl md:text-6xl text-[#e5e7eb]'>{dropdownIcons[subItem.label]}</div>
                                                        {subItem.label}
                                                    </NavLink>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar