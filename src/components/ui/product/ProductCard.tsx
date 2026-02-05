import type { ReactNode } from 'react'

type ProductSpec = {
    icon: ReactNode
    label: string
}

type ProductCardProps = {
    image: string
    name: string
    price: string
    specs: ProductSpec[]
}

const ProductCard = ({ image, name, price, specs }: ProductCardProps) => {
    return (
        <div className='bg-[#131415] flex flex-col gap-2 md:gap-4 justify-center h-[51dvh] min-[375px]:h-[300px] md:h-[420px] rounded-sm md:rounded-lg text-white w-[45.5dvw] md:w-[330px]'>
            <img alt={name} className='h-[16dvh] min-[375px]:h-[100px] md:h-[170px] object-contain w-full' src={image}/>
            <div className='mx-2 md:ml-3'>
                <h3 className='font-light text-[5dvw] min-[375px]:text-lg md:text-2xl'>{name}</h3>
                <div className='flex flex-col gap-2 md:gap-4 my-2 md:my-4'>
                    {specs.slice(0, 2).map((spec, index) => (
                        <div className='flex gap-2 md:gap-4 items-center text-[5dvw] min-[375px]:text-lg md:text-2xl' key={index}>
                            {spec.icon}
                            <span className='text-[3.5dvw] min-[375px]:text-sm md:text-lg'>{spec.label}</span>
                        </div>
                    ))}
                </div>
                <p className='font-semibold text-[4dvw] min-[375px]:text-base md:text-xl text-white'>{price}</p>
            </div>            
        </div>
    )
}

export default ProductCard