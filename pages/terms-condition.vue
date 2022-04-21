<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Terms & Conditions" />
        <Conditions />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Conditions from '../components/terms-condition/Conditions'

    export default {
        name: 'TermsConditionsPage',
        components: {
            Navbar,
            PageTitle,
            Conditions,
        }
    }
</script>