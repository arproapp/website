<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects One" />
        <Projects />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Projects from '../components/projects-one/Projects'

    export default {
        name: 'ProjectsPageOne',
        components: {
            Navbar,
            PageTitle,
            Projects,
        }
    }
</script>