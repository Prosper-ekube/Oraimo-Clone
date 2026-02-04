import { FaPlay } from 'react-icons/fa'
import intro_vid from '../../../assets/images/intro_vid.mp4'
import intro_vid_pc from '../../../assets/images/intro_vid_pc.mp4'

const Hero: React.FC = () => {
    return (
        <section className='h-screen relative w-full'>
            <div className='h-screen mx-auto overflow-hidden relative w-full'>
                <video autoPlay className='h-full lg:hidden object-cover w-full' loop muted playsInline src={intro_vid} />
                <video autoPlay className='h-full hidden lg:block object-cover w-full' loop muted playsInline src={intro_vid_pc} />
                <div className='absolute bottom-[12dvh] flex flex-row items-center justify-center left-0 right-0'>
                    <span className='absolute font-normal left-1/2 text-xl md:text-4xl text-white -translate-x-1/2'>SpaceBuds</span>
                    <button aria-label='Play video' className='absolute right-[8dvw] text-white text-xs transition-transform hover:scale-110'>
                        <FaPlay />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero