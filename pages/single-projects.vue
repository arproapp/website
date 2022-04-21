<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Single Projects" />
        <ProjectDetails />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProjectDetails from '../components/single-projects/ProjectDetails'

    export default {
        name: 'SingleProjectsPage',
        components: {
            Navbar,
            PageTitle,
            ProjectDetails,
        }
    }
</script>