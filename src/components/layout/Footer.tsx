import { Link } from 'react-router-dom'
import oraimoLogo from '../../assets/images/oraimo_icon.png'

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#1b1d1e] w-full'>
            <div className='cursor-default flex flex-col gap-5 max-w-5xl md:gap-9 mx-auto px-2 py-5 md:py-8 text-[#484b4b] text-center'>
                <div className='flex flex-col gap-3 items-center justify-center md:flex-row md:gap-1'>
                    <span className='font-bold text-base'>ORAIMO TECHNOLOGY LIMITED</span>
                    <p className='cursor-text text-xs md:text-sm'>Media Contact: hello.ab@oraimo.com</p>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='bg-[#484b4b] h-px w-full'></span>
                    <img alt='Oraimo Logo' className='lg:w-23 md:w-20 w-14' src={oraimoLogo} />
                    <span className='bg-[#484b4b] h-px w-full'></span>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center md:flex-row'>
                    <div className='flex font-bold gap-2 justify-center md:font-normal text-xs md:text-sm'>
                        <Link className='border-[#2b2f31] border-r-2 cursor-pointer duration-1000 hover:text-[#81e500] pr-2 transition-colors uppercase md:normal-case'
                            to='/privacy-policy'>Privacy Policy
                        </Link>
                        <Link className='border-[#2b2f31] border-r-2 cursor-pointer duration-1000 hover:text-[#81e500] pr-2 transition-colors uppercase md:normal-case'
                            to='/terms-of-use'>Terms of Use 
                        </Link>
                        <a className='cursor-pointer duration-1000 hover:text-[#81e500] transition-colors uppercase md:normal-case'
                            href='https://mail.google.com/mail/?view=cm&fs=1&to=hello.ab@oraimo.com' target='_blank' rel='noopener noreferrer'
                        >
                            Bulk Order
                        </a>
                    </div>
                    <span className='text-xs md:text-sm'>Copyright © 2026 oraimo Corporation. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer