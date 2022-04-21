<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Two" />
        <Protfolio />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Protfolio from '../components/projects-two/Protfolio'

    export default {
        name: 'ProjectsPageTwo',
        components: {
            Navbar,
            PageTitle,
            Protfolio,
        }
    }
</script>