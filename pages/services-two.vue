<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services Two" />
        <AgencyServices />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AgencyServices from '../components/services-two/AgencyServices'

export default {
    name: 'ServicesTwoPage',
    components: {
        Navbar,
        PageTitle,
        AgencyServices,
    }
}
</script>