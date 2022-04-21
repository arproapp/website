<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <Work />
        <Services />
        <Support />
        <Overview />
        <Choose />
        <FunFacts />
        <Projects />
        <Team />
        <Skills />
        <Blog />
        <Clients />
        <Partner />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/home-two/MainBanner'
import Features from '../components/home-two/Features'
import Work from '../components/home-two/Work'
import Services from '../components/home-two/Services'
import Support from '../components/home-two/Support'
import Overview from '../components/home-two/Overview'
import Choose from '../components/home-two/Choose'
import FunFacts from '../components/home-two/FunFacts'
import Projects from '../components/home-two/Projects'
import Team from '../components/home-two/Team'
import Skills from '../components/home-two/Skills'
import Blog from '../components/Common/Blog'
import Clients from '../components/home-two/Clients'
import Partner from '../components/home-two/Partner'

export default {
    name: 'HomePageTwo',
    components: {
        Navbar,
        MainBanner,
        Features,
        Work,
        Services,
        Support,
        Overview,
        Choose,
        FunFacts,
        Projects,
        Team,
        Skills,
        Blog,
        Clients,
        Partner,
    }
}
</script>
