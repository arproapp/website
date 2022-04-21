<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Learn />
        <App />
        <Data />
        <Services />
        <Customer />
        <Review />
        <Team />
        <Clients />
        <Blog />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-five/MainBanner'
import Learn from '../components/home-five/Learn'
import App from '../components/home-five/App'
import Data from '../components/home-five/Data'
import Services from '../components/home-five/Services'
import Customer from '../components/home-five/Customer'
import Review from '../components/home-five/Review'
import Team from '../components/Common/Team'
import Clients from '../components/home-five/Clients'
import Blog from '../components/Common/Blog'

export default {
    name: 'HomePageFive',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Learn,
        App,
        Data,
        Services,
        Customer,
        Review,
        Team,
        Clients,
        Blog,
    }
}
</script>
