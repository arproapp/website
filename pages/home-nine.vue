<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <MoreFeatures />
        <About />
        <Services />
        <Pricing />
        <Tab />
        <Team />
        <Portfolio />
        <Subscribe />
        <Blog />
        <Faq />
        <Clients />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import MainBanner from '../components/home-nine/MainBanner'
    import MoreFeatures from '../components/home-nine/MoreFeatures'
    import About from '../components/home-nine/About'
    import Services from '../components/home-nine/Services'
    import Pricing from '../components/home-nine/Pricing'
    import Tab from '../components/Common/Tab'
    import Team from '../components/home-nine/Team'
    import Portfolio from '../components/home-nine/Portfolio'
    import Subscribe from '../components/home-nine/Subscribe'
    import Blog from '../components/Common/Blog'
    import Faq from '../components/home-nine/Faq'
    import Clients from '../components/home-nine/Clients'

    export default {
        name: 'HomePageNine',
        components: {
            NavbarStyleTwo,
            MainBanner,
            MoreFeatures,
            About,
            Services,
            Pricing,
            Tab,
            Team,
            Portfolio,
            Subscribe,
            Blog,
            Faq,
            Clients,
        }
    }
</script>