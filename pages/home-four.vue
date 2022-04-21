<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Process />
        <About />
        <Services />
        <Protfolio />
        <Review />
        <Team />
        <Subscribe />
        <Blog />
        <Faq />
        <Clients />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-four/MainBanner'
import Process from '../components/home-four/Process'
import About from '../components/home-four/About'
import Services from '../components/home-four/Services'
import Protfolio from '../components/home-four/Protfolio'
import Review from '../components/home-four/Review'
import Team from '../components/Common/Team'
import Subscribe from '../components/home-four/Subscribe'
import Blog from '../components/Common/Blog'
import Faq from '../components/home-four/Faq'
import Clients from '../components/home-four/Clients'

export default {
    name: 'HomePageFour',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Process,
        About,
        Services,
        Protfolio,
        Review,
        Team,
        Subscribe,
        Blog,
        Faq,
        Clients,
    }
}
</script>
