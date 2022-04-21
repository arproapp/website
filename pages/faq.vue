<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Faq" />
        <Pricing />
        <Tab />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Pricing from '../components/Faq/Faq'
    import Tab from '../components/Common/Tab'

    export default {
        name: 'FaqPage',
        components: {
            Navbar,
            PageTitle,
            Pricing,
            Tab,
        }
    }
</script>