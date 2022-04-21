<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services One" />
        <Services />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Services from '../components/services-one/Services'

export default {
    name: 'ServicesOnePage',
    components: {
        Navbar,
        PageTitle,
        Services,
    }
}
</script>