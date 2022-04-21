<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Privacy Policy" />
        <Conditions />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Conditions from '../components/privacy-policy/Conditions'

    export default {
        name: 'PrivacyPolicyPage',
        components: {
            Navbar,
            PageTitle,
            Conditions,
        }
    }
</script>