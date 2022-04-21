<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <MoreFeatures />
        <Work />
        <Digital />
        <Services />
        <Experience />
        <Projects />
        <Team />
        <Skills />
        <Contact />
        <Clients />
        <Blog />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-six/MainBanner'
import MoreFeatures from '../components/home-six/MoreFeatures'
import Work from '../components/home-six/Work'
import Digital from '../components/home-six/Digital'
import Services from '../components/home-six/Services'
import Experience from '../components/home-six/Experience'
import Projects from '../components/Common/Projects'
import Team from '../components/home-six/Team'
import Skills from '../components/home-six/Skills'
import Contact from '../components/home-six/Contact'
import Clients from '../components/home-six/Clients'
import Blog from '../components/Common/Blog'

export default {
    name: 'HomePageSix',
    components: {
        NavbarStyleTwo,
        MainBanner,
        MoreFeatures,
        Work,
        Digital,
        Services,
        Experience,
        Projects,
        Team,
        Skills,
        Contact, 
        Clients,
        Blog,
    }
}
</script>
