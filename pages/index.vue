<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <Creative />
        <Services />
        <Development />
        <Video />
        <Choose />
        <Projects class="pb-70" />
        <Clients />
        <Blog />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/Index/MainBanner'
import Features from '../components/Common/Features'
import Creative from '../components/Common/Creative'
import Services from '../components/Index/Services'
import Development from '../components/Index/Development'
import Video from '../components/Common/Video'
import Choose from '../components/Index/Choose'
import Projects from '../components/Common/Projects'
import Clients from '../components/Common/Clients'
import Blog from '../components/Common/Blog'

export default {
    components: {
        Navbar,
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