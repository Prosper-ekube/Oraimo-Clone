import { useState, useEffect, useCallback } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false)

    const handleScroll = useCallback(() => {
        setVisible(window.scrollY > 900)
    }, [])

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    if (!visible) return null

    return (
        <button aria-label='Scroll to top'
            className='bg-[#1b1d1e] bottom-8 cursor-pointer fixed flex h-10 items-center justify-center opacity-80 right-8 rounded-3xl text-[#484b4b] w-10'
            onClick={scrollToTop}
        >
            <HiArrowUp className='h-5 w-5' />
        </button>
    )
}

export default ScrollToTop