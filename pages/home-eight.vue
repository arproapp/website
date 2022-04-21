<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Features />
        <Creative />
        <Services />
        <Development />
        <Video />
        <Choose />
        <Projects />
        <Clients />
        <Blog />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import MainBanner from '../components/home-eight/MainBanner'
import Features from '../components/home-eight/Features'
import Creative from '../components/Common/Creative'
import Services from '../components/home-eight/Services'
import Development from '../components/home-eight/Development'
import Video from '../components/Common/Video'
import Choose from '../components/home-eight/Choose'
import Projects from '../components/Common/Projects'
import Clients from '../components/Common/Clients'
import Blog from '../components/Common/Blog'

export default {
    name: 'HomePageEight',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Features,
        Creative,
        Services,
        Development,
        Video,
        Choose,
        Projects,
        Clients,
        Blog,
    }
}
</script>