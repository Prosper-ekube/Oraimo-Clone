import Button from '../../../components/ui/Button'

const Store: React.FC = () => {
    return (
        <section className="bg-center bg-cover bg-no-repeat bg-[url('/images/store_mobile.png')] lg:bg-[url('/images/store.png')] flex h-[100dvh] lg:h-auto justify-end 
            max-w-full lg:mt-8 pb-7 md:pb-14 lg:pb-8 lg:pt-[400px]"
        >
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center justify-end mx-auto">
                <Button text='FIND STORE' to='../../shopping/Shopping'width='w-[270px] md:w-[620px] lg:w-[250px]'/>
                <Button text='SHOP ONLINE' to='../../shopping/Shopping'width='w-[270px] md:w-[620px] lg:w-[250px]'/>
            </div>
        </section>
    )
}

export default Store