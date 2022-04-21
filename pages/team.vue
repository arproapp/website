<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team" />
        <Team />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Team from '../components/Team/Team'

    export default {
        name: 'TeamPage',
        components: {
            Navbar,
            PageTitle,
            Team,
        }
    }
</script>