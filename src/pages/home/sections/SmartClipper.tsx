import { useEffect, useState } from 'react'

import { BsClockFill, BsFillWrenchAdjustableCircleFill } from 'react-icons/bs'
import { FaBoltLightning } from 'react-icons/fa6'
import { GiRazorBlade } from 'react-icons/gi'
import { MdArrowBackIos, MdArrowForwardIos, MdSmartScreen } from 'react-icons/md'
import { SiLitiengine } from 'react-icons/si'

import Button from '../../../components/ui/Button'
import ProductCard from '../../../components/ui/product/ProductCard'

import smart_clipper_2_gold from '../../../assets/images/smart_clipper_2_gold.png'
import smart_clipper_image_header from '../../../assets/images/smart_clipper_image_header.png'
import smart_clipper_image_header_mobile from '../../../assets/images/smart_clipper_image_header_mobile.png'
import smart_clipper_pro from '../../../assets/images/smart_clipper_pro.png'
import smart_clipper_pro_max from '../../../assets/images/smart_clipper_pro_max.png'
import smart_trimmer_2_pro from '../../../assets/images/smart_trimmer_2_pro.png'

const products = [
    {
        image: smart_trimmer_2_pro,
        name: 'Smart Trimmer 2 Pro',
        price: '₦38,000',
        specs: [
            { icon: <BsClockFill />, label: '2.5 hrs Runtime' },
            { icon: <BsFillWrenchAdjustableCircleFill />, label: 'Adjustable Blade Head' },
        ],
    },
    {
        image: smart_clipper_pro_max,
        name: 'Smart Clipper Pro Max',
        price: '₦83,000',
        specs: [
            { icon: <BsFillWrenchAdjustableCircleFill />, label: 'Adjustable Blades' },
            { icon: <MdSmartScreen />, label: 'LED Screen Display' },
        ],
    },
    {
        image: smart_clipper_2_gold,
        name: 'Smart Clipper 2 Gold',
        price: '₦56,000',
        specs: [
            { icon: <FaBoltLightning />, label: 'AniFast™ Fast Charging' },
            { icon: <GiRazorBlade />, label: 'Black Diamond Blade' },
        ],
    },
    {
        image: smart_clipper_pro,
        name: 'Smart Clipper Pro',
        price: '₦63,000',
        specs: [
            { icon: <GiRazorBlade />, label: 'Self-sharpening and Adjustable Blades' },
            { icon: <SiLitiengine />, label: 'Super Powerful Motor' },
        ],
    },
]

const SmartClipper: React.FC = () => {
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
            <img className='lg:hidden' src={smart_clipper_image_header_mobile} />
            <img className='hidden lg:block' src={smart_clipper_image_header} />
            <div className='flex flex-col items-center justify-center px-4 py-7 md:py-14'>
                <div className='relative'>
                    {/* Carousel */}
                    <div className='flex gap-2 justify-center md:gap-4'>
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
                {/* Line indicators */}
                <div className='flex gap-1 items-center justify-center my-6 md:my-12'>
                    {products.map((_, index) => (
                        <button
                            className={`h-[1px] md:h-[2px] transition w-8 md:w-20 ${index === currentIndex ? 'bg-[#81e500]' : 'bg-[#3a3e3f]'}`}
                            key={index} onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                {/* CTA Button */}
                <div className='flex justify-center mt-2 md:mt-4'>
                    <Button text='EXPLORE PERSONAL CARE' to='../../../pages/product/tabs/PersonalCare' />
                </div>
            </div>
        </section>
    )
}

export default SmartClipper