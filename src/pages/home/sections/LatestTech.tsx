import anifast_chip from '../../../assets/images/anifast_chip.png'
import tuning from '../../../assets/images/tuning.png'

const LatestTech: React.FC = () => {
    return (
        <section className='md:py-10 py-3'>
            {/* Headline */}
            <div className='flex flex-row gap-2 md:gap-4 items-center justify-center mb-3 md:mb-10'>
                <span className='bg-white h-px w-[25px] md:w-[70px] lg:w-[30px]' />
                <h3 className='font-bold text-base md:text-4xl lg:text-2xl text-white'>EXPLORE OUR LATEST TECH</h3>
                <span className='bg-white h-px w-[25px] md:w-[70px] lg:w-[30px]' />
            </div>
            <div className='flex flex-col lg:flex-row'>
                <img alt='AniFast charging technology'className='lg:w-1/2'loading='lazy'src={anifast_chip}/>
                <img alt='Audio tuning technology' className='lg:w-1/2' loading='lazy' src={tuning} />
            </div>
        </section>
    )
}

export default LatestTech