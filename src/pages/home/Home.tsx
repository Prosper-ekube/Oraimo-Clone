import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

import a_design from '../../assets/images/a_design.png'
import cnet from '../../assets/images/cnet.png'
import if_img from '../../assets/images/if_img.png'
import red_dot from '../../assets/images/red_dot.png'
import stuff from '../../assets/images/stuff.png'
import vgp from '../../assets/images/vgp.png'

import Audio from './sections/Audio'
import Hero from './sections/Hero'
import LatestTech from './sections/LatestTech'
import Power from './sections/Power'
import SmartClipper from './sections/SmartClipper'
import SmartWatch from './sections/SmartWatch'
import Store from './sections/Store'
import UserCount from './sections/UserCount'
import UserReviews from './sections/UserReviews'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className='bg-black'>
                <Hero />
                <Audio />
                <Power />
                <SmartWatch />
                <SmartClipper />
                <UserCount />
                <LatestTech />
                <Store />
                <UserReviews />
                <section className='gap-4 grid grid-cols-2 lg:grid-cols-6 pb-5 md:pb-14 place-items-center'>
                    <img alt='Red Dot Award' loading='lazy' src={red_dot} />
                    <img alt='CNET' loading='lazy' src={cnet} />
                    <img alt='A Design Award' loading='lazy' src={a_design} />
                    <img alt='Stuff Magazine' loading='lazy' src={stuff} />
                    <img alt='IF Design Award' loading='lazy' src={if_img} />
                    <img alt='VGP Award' loading='lazy' src={vgp} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home