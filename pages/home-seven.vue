<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Features />
        <Experience />
        <Digital />
        <Services />
        <MainBanner8 />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-seven/MainBanner'
import MoreFeatures from '../components/home-seven/MoreFeatures'
import Tech from '../components/home-seven/Tech'
import Digital from '../components/home-seven/Digital'
import AgencyServices from '../components/home-seven/AgencyServices'
import Experience from '../components/home-seven/Experience'
import Tab from '../components/Common/Tab'
import Team from '../components/Common/Team'
import Faq from '../components/home-seven/Faq'
import Clients from '../components/home-seven/Clients'
import Blog from '../components/Common/Blog'
import MainBanner8 from '../components/home-eight/MainBanner'
import Features from '../components/home-eight/Features'
import Services from '../components/home-eight/Services'

export default {
    name: 'HomePageSeven',
    components: {
        NavbarStyleTwo,
        MainBanner,
        MoreFeatures,
        Tech,
        Digital,
        AgencyServices,
        Experience,
        Tab,
        Team,
        Faq,
        Clients,
        Blog,
        MainBanner8,
        Features,
        Services,
    }
}
</script>