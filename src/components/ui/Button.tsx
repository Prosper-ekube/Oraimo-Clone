import { Link } from 'react-router-dom'

type NavButtonProps = {
    text: string
    to: string
    width?: string
}

const Button = ({ text, to, width }: NavButtonProps) => {
    return (
        <Link
            aria-label={text}
            className={[
                'bg-transparent',
                'border',
                'border-[#81e500]',
                'font-bold',
                'px-7', 'md:px-16',
                'py-1', 'md:py-2', 'lg:py-1',
                'rounded-2xl', 'md:rounded-[28px]', 'rounded-2xl',
                'text-[#81e500]', 'text-center',
                'text-xs', 'md:text-2xl', 'lg:text-base',
                width
            ]
                .filter(Boolean)
                .join(' ')}
            to={to}
        >
            {text}
        </Link>
    )
}

export default Button