//        
import type { Product } from '../../../pages/admin/types'
import { ICON_POOL } from '../../../pages/admin/Icons'

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className='bg-[#131415] flex flex-col gap-2 md:gap-4 justify-center h-[51dvh] min-[375px]:h-[300px] md:h-[420px] rounded-lg text-white w-[45.5dvw] md:w-[330px]'>
            <img alt={product.name} className='h-[16dvh] min-[375px]:h-[100px] md:h-[170px] object-contain w-full' src={product.image} />
            <div className='mx-2 md:ml-3'>
                <h3 className='font-light text-[5dvw] min-[375px]:text-lg md:text-2xl'>{product.name}</h3>
                <div className='flex flex-col gap-2 md:gap-4 my-2 md:my-4'>
                    {product.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className='flex gap-2 md:gap-4 items-center text-[5dvw] min-[375px]:text-lg md:text-2xl'>
                            {ICON_POOL[spec.iconKey]}
                            <span className='text-[3.5dvw] min-[375px]:text-sm md:text-lg'>{spec.label}</span>
                        </div>
                    ))}
                </div>
                <p className='font-semibold text-[4dvw] min-[375px]:text-base md:text-xl text-white'>${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductCard