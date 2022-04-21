<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Single Services" />
        <ServicesDetails />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ServicesDetails from '../components/single-services/ServicesDetails'

export default {
    name: 'SingleServicesPage',
    components: {
        Navbar,
        PageTitle,
        ServicesDetails,
    }
}
</script>