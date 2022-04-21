<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About" />
        <About class="pb-0" />
        <Team />
        <Faq />
        <Clients class="pb-100" />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import About from '../components/About/About'
import Faq from '../components/About/Faq'
import Team from '../components/Common/Team'
import Clients from '../components/Common/Clients'

export default {
    name: 'AboutPage',
    components: {
        Navbar,
        PageTitle,
        About,
        Faq,
        Team,
        Clients,
    }
}
</script>