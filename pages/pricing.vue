<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Pricing" />
        <Pricing />
        <Tab />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Pricing from '../components/Pricing/Pricing'
import Tab from '../components/Common/Tab'

export default {
    name: 'PricingPage',
    components: {
        Navbar,
        PageTitle,
        Pricing,
        Tab,
    }
}
</script>