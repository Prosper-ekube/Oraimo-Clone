import { useEffect, useState } from 'react'

import { FaBoltLightning } from 'react-icons/fa6'
import { GiLaptop, GiLightningFrequency, GiMagnet } from 'react-icons/gi'
import { HiMiniCpuChip } from 'react-icons/hi2'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { PiBatteryChargingLight, PiNumberThree } from 'react-icons/pi'

import hyper_gan_65 from '../../../assets/images/hyper_gan_65.png'
import mag_power from '../../../assets/images/mag_power.png'
import power_image_header from '../../../assets/images/power_image_header.png'
import power_image_header_mobile from '../../../assets/images/power_image_header_mobile.png'
import power_jet from '../../../assets/images/power_jet.png'
import traveler_link from '../../../assets/images/traveler_link.png'

import Button from '../../../components/ui/Button'
import ProductCard from '../../../components/ui/product/ProductCard'

const products = [
    {
        image: power_jet,
        name: 'Power Jet 130',
        price: '₦93,900',
        specs: [
            { icon: <PiBatteryChargingLight />, label: '130W Type-C Fast Charging' },
            { icon: <GiLaptop />, label: 'Power Laptop & Phone at Once' }
        ]
    },
    {
        image: traveler_link,
        name: 'Traveler Link 27',
        price: '₦41,000',
        specs: [
            { icon: <FaBoltLightning />, label: '2.4A Max Fast Charging' },
            { icon: <PiNumberThree />, label: '3 Built-in Charging Cables' }
        ]
    },
    {
        image: mag_power,
        name: 'MagPower 15',
        price: '₦38,000',
        specs: [
            { icon: <GiMagnet />, label: 'Strong Magnetic Attachment' },
            { icon: <GiLightningFrequency />, label: '15W Wireless Charge' }
        ]
    },
    {
        image: hyper_gan_65,
        name: 'HyperGaN 65',
        price: '₦42,000',
        specs: [
            { icon: <HiMiniCpuChip />, label: 'GaN Tech' },
            { icon: <GiLaptop />, label: 'Support Laptop Charging' }
        ]
    }
]

const Power: React.FC = () => {
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

    const visibleProducts = Array.from({ length: itemsPerView }, (_, index) => (
        products[(currentIndex + index) % products.length]
    ))

    return (
        <section>
            <img alt='Power products header' className='lg:hidden' loading='lazy' src={power_image_header_mobile} />
            <img alt='Power products header' className='hidden lg:block' loading='lazy' src={power_image_header} />
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
                    <button aria-label='Previous product'
                        className='absolute hidden lg:block left-0 opacity-60 text-7xl text-[#3a3e3f] top-1/2 transition -translate-y-1/2 hover:opacity-100'
                        onClick={handlePrev}
                    >
                        <MdArrowBackIos />
                    </button>
                    <button aria-label='Next product'
                        className='absolute hidden lg:block opacity-60 right-0 text-7xl text-[#3a3e3f] top-1/2 transition -translate-y-1/2 hover:opacity-100'
                        onClick={handleNext}
                    >
                        <MdArrowForwardIos />
                    </button>
                </div>
                {/* Indicators */}
                <div className='flex gap-1 items-center justify-center my-6 md:my-12'>
                    {products.map((_, index) => (
                        <button aria-label={`Go to product ${index + 1}`}
                            className={`h-[1px] md:h-[2px] transition w-8 md:w-20 ${index === currentIndex ? 'bg-[#81e500]' : 'bg-[#3a3e3f]'}`}
                            key={index} onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                {/* CTA */}
                <div className='flex justify-center md:mt-4 mt-2'>
                    <Button text='EXPLORE POWER' to='../../../pages/product/tabs/Power' />
                </div>
            </div>
        </section>
    )
}

export default Power