<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Services />
        <Audience />
        <Solutions />
        <Design />
        <Counter />
        <Team />
        <Pricing />
        <Protfolio />
        <Clients />
        <Blog />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-three/MainBanner'
import Services from '../components/home-three/Services'
import Audience from '../components/home-three/Audience'
import Solutions from '../components/home-three/Solutions'
import Design from '../components/home-three/Design'
import Counter from '../components/home-three/Counter'
import Team from '../components/Common/Team'
import Pricing from '../components/home-three/Pricing'
import Protfolio from '../components/home-three/Protfolio'
import Clients from '../components/Common/Clients'
import Blog from '../components/Common/Blog'

export default {
    name: 'HomePageThree',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Services,
        Audience,
        Solutions,
        Design,
        Counter,
        Team,
        Pricing,
        Protfolio,
        Clients,
        Blog,
    }
}
</script>
