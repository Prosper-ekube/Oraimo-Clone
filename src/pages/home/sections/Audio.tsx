import { useEffect, useState } from 'react'

import { BsClockFill } from 'react-icons/bs'
import { CiLight } from 'react-icons/ci'
import { FaInbox } from 'react-icons/fa'
import { GiHistogram, GiSoundWaves } from 'react-icons/gi'
import { LuVibrate } from 'react-icons/lu'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import necklace_pro from '../../../assets/images/necklace_pro.png'
import open_arc from '../../../assets/images/open_arc.png'
import spacebuds_hybrid from '../../../assets/images/spacebuds_hybrid.png'
import spacebuds_pro from '../../../assets/images/spacebuds_pro.png'

import Button from '../../../components/ui/Button'
import ProductCard from '../../../components/ui/product/ProductCard'

const products = [
    {
        image: spacebuds_hybrid,
        name: 'SpaceBuds Hybrid',
        price: '₦55,000',
        specs: [
            { icon: <GiSoundWaves />, label: '50dB Hybrid ANC Noise Cancellation' },
            { icon: <CiLight />, label: 'Personalized Lighting Effect' }
        ]
    },
    {
        image: spacebuds_pro,
        name: 'SpaceBuds Pro',
        price: '₦129,000',
        specs: [
            { icon: <GiSoundWaves />, label: '50dB Hybrid ANC Noise Cancellation' },
            { icon: <FaInbox />, label: 'Space Capsule Design Concept' }
        ]
    },
    {
        image: open_arc,
        name: 'Open Arc',
        price: '₦59,900',
        specs: [
            { icon: <GiHistogram />, label: 'Open-Ear Bass Boost' },
            { icon: <BsClockFill />, label: '36-Hr Long Playtime' }
        ]
    },
    {
        image: necklace_pro,
        name: 'Necklace Lite',
        price: '₦18,000',
        specs: [
            { icon: <BsClockFill />, label: '30Hr Playtime (Lights On)' },
            { icon: <LuVibrate />, label: 'Vibration Notifications' }
        ]
    }
]

const Audio: React.FC = () => {
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
        <section className='flex flex-col items-center justify-center px-4 py-7 md:py-14'>
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
                <Button text='EXPLORE AUDIO' to='../../../pages/product/tabs/Audio' />
            </div>
        </section>
    )
}

export default Audio