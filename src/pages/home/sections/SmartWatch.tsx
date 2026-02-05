import { useEffect, useState } from 'react'

import { BiSolidLike } from 'react-icons/bi'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { IoMdBatteryCharging } from 'react-icons/io'
import { IoWatchOutline, IoWatchSharp } from 'react-icons/io5'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { RiSpeakFill } from 'react-icons/ri'
import { SiRoundcube } from 'react-icons/si'

import Button from '../../../components/ui/Button'
import ProductCard from '../../../components/ui/product/ProductCard'

import oraimo_watch_5r from '../../../assets/images/oraimo_watch_5r.png'
import smart_watch_image_header from '../../../assets/images/smart_watch_image_header.png'
import smart_watch_image_header_mobile from '../../../assets/images/smart_watch_image_header_mobile.png'
import watch_es_2 from '../../../assets/images/watch_es_2.png'
import watch_nova_am from '../../../assets/images/watch_nova_am.png'
import watch_pro_nt from '../../../assets/images/watch_pro_nt.png'

const products = [
    {
        image: watch_pro_nt,
        name: 'Watch Pro NT',
        price: '₦210,000',
        specs: [
            { icon: <GiArtificialIntelligence />, label: 'Oraimo AI' },
            { icon: <BiSolidLike />, label: 'Forged Carbon Bezel' },
        ],
    },
    {
        image: oraimo_watch_5r,
        name: 'Oraimo Watch 5R',
        price: '₦46,700',
        specs: [
            { icon: <RiSpeakFill />, label: 'Wireless HD Calling' },
            { icon: <IoMdBatteryCharging />, label: '10 Days Battery Life' },
        ],
    },
    {
        image: watch_nova_am,
        name: 'Watch Nova AM',
        price: '₦55,900',
        specs: [
            { icon: <IoWatchOutline />, label: '2.01" AMOLED Screen' },
            { icon: <SiRoundcube />, label: 'Sleek Design Curved Cover' },
        ],
    },
    {
        image: watch_es_2,
        name: 'Watch ES 2',
        price: '₦47,900',
        specs: [
            { icon: <RiSpeakFill />, label: 'Bluetooth Call' },
            { icon: <IoWatchSharp />, label: '1.95" AMOLED Display' },
        ],
    },
]

const SmartWatch: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(2)

    useEffect(() => {
        const updateItemsPerView = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 3 : 2)
        }

        updateItemsPerView()
        window.addEventListener('resize', updateItemsPerView)

        return () => window.removeEventListener('resize', updateItemsPerView)
    }, [])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
    }

    const visibleProducts = Array.from({ length: itemsPerView }).map(
        (_, i) => products[(currentIndex + i) % products.length],
    )

    return (
        <section>
            <img className='lg:hidden' src={smart_watch_image_header_mobile} />
            <img className='hidden lg:block' src={smart_watch_image_header} />
            <div className='flex flex-col items-center justify-center px-4 py-7 md:py-14'>
                <div className='relative'>
                    {/* Carousel */}
                    <div className='flex gap-2 md:gap-4 justify-center'>
                        {visibleProducts.map((product, index) => (
                            <div className='lg:w-1/3 w-1/2' key={index}>
                                <ProductCard image={product.image} name={product.name} price={product.price} specs={product.specs} />
                            </div>
                        ))}
                    </div>
                    {/* Arrows */}
                    <button className='absolute hidden lg:block left-0 opacity-60 text-7xl text-[#3a3e3f] top-1/2 transition -translate-y-1/2 hover:opacity-100'
                        onClick={handlePrev}
                    >
                        <MdArrowBackIos />
                    </button>
                    <button className='absolute hidden lg:block opacity-60 right-0 text-7xl text-[#3a3e3f] top-1/2 transition -translate-y-1/2 hover:opacity-100'
                        onClick={handleNext}
                    >
                        <MdArrowForwardIos />
                    </button>
                </div>
                {/* Indicators */}
                <div className='flex gap-1 items-center justify-center my-6 md:my-12'>
                    {products.map((_, index) => (
                        <button className={`h-[1px] md:h-[2px] transition w-8 md:w-20 ${index === currentIndex ? 'bg-[#81e500]' : 'bg-[#3a3e3f]'}`}
                            key={index} onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                {/* CTA */}
                <div className='flex justify-center md:mt-4 mt-2'>
                    <Button text='EXPLORE SMARTWATCH' to='../../../pages/product/tabs/SmartWatch'/>
                </div>
            </div>
        </section>
    )
}

export default SmartWatch