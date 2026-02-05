import { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useSwipeable } from 'react-swipeable'

import aji_nsewlek from '../../../assets/images/aji_nsewlek.png'
import chouaib_review from '../../../assets/images/chouaib_reviews.png'
import fisayo_fosudo from '../../../assets/images/fisayo_fosudo.png'
import rick_aqua from '../../../assets/images/rick_aqua.png'
import unbox_therapy from '../../../assets/images/unbox_therapy.png'

const users = [
    {
        avi: unbox_therapy,
        name: 'Unbox Therapy',
        review: '"OpenCirclet is the ultimate gym companion, from intense workouts to training sessions."'
    },
    {
        avi: fisayo_fosudo,
        name: 'Fisayo Fosudo',
        review: '"Vocals and the instrumentals were very outstanding and I\'m not trying to use colorful words."'
    },
    {
        avi: aji_nsewlek,
        name: 'Aji Nsewlek',
        review: '"The Watch 4 Plus offers the best battery life in its category: up to 7 days for typical use."'
    },
    {
        avi: chouaib_review,
        name: 'Chouaib Review',
        review: '"I tested the Oraimo FreePods 4 and I can confirm that the sound in music is impressive."'
    },
    {
        avi: rick_aqua,
        name: 'Rick Aqua',
        review: '"For the best and most affordable gadgets, oraimo is all you need."'
    },
]

const UserReviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(1)

    useEffect(() => {
        // Adjust number of visible cards on resize
        const updateItemsPerView = () => setItemsPerView(window.innerWidth >= 768 ? 3 : 1)
        updateItemsPerView()
        window.addEventListener('resize', updateItemsPerView)
        return () => window.removeEventListener('resize', updateItemsPerView)
    }, [])

    const visibleUsers = Array.from({ length: itemsPerView }).map(
        (_, i) => users[(currentIndex + i - 1 + users.length) % users.length],
    )

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % users.length),
        onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + users.length) % users.length),
        trackMouse: true, // Allows drag with mouse as well
    })

    return (
        <section className='relative' {...handlers}>
            {/* Header */}
            <div className='flex gap-2 md:gap-4 items-center justify-center my-3 md:my-10'>
                <span className='bg-white h-px w-[25px] md:w-[70px] lg:w-[30px]' />
                <h3 className='font-bold text-base md:text-4xl lg:text-2xl text-center text-white w-[200px] md:w-[480px] lg:w-[550px]'>
                    HEAR WHAT THEY ARE SAYING ABOUT ORAIMO
                </h3>
                <span className='bg-white h-px w-[25px] md:w-[70px] lg:w-[30px]' />
            </div>
            {/* Carousel */}
            <div className='flex justify-center md:gap-1 overflow-hidden'>
                {visibleUsers.map((user, index) => {
                    const isCenter = index === Math.floor(itemsPerView / 2)
                    return (
                        <div className={`relative transition w-full ${isCenter ? 'md:w-5/6 lg:w-1/3 scale-100' : 'md:w-1/5 lg:w-1/3 scale-95'}`} key={index}>
                            <div className='bg-center bg-cover flex h-[60dvh] md:h-[500px] lg:h-[480px] items-end' style={{ backgroundImage: `url(${user.avi})` }}>
                                {isCenter && (
                                    <div className='bg-black/60 h-full relative text-white w-full'>
                                        <div className='absolute bottom-[20px] md:bottom-[40px] pl-3 md:pl-5 w-[200px] md:w-[370px]'>
                                            <p className='font-bold mb-1 text-xs md:text-2xl'>{user.name}</p>
                                            <p className='leading-relaxed text-[11px] md:text-xl'>{user.review}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* Arrows */}
            <button className='absolute hidden lg:block left-0 text-6xl text-[#3a3e3f] top-1/2 -translate-y-1/2'
                onClick={() => setCurrentIndex((prev) => (prev - 1 + users.length) % users.length)}
            >
                <MdArrowBackIos />
            </button>
            <button className='absolute hidden lg:block right-0 text-6xl text-[#3a3e3f] top-1/2 -translate-y-1/2'
                onClick={() => setCurrentIndex((prev) => (prev + 1) % users.length)}
            >
                <MdArrowForwardIos />
            </button>
            {/* Indicators */}
            <div className='flex gap-1 items-center justify-center py-6 md:py-12'>
                {users.map((_, index) => {
                    const realIndex = currentIndex - 1
                    return (
                        <button className={`h-[1px] md:h-[2px] transition w-8 md:w-20 ${realIndex === index ? 'bg-[#81e500]' : 'bg-[#3a3e3f]'}`}
                            key={index} onClick={() => setCurrentIndex(index + 1)}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default UserReviews
