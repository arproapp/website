<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Sign Up" />
        <Signup />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Signup from '../components/sign-up/Signup'

    export default {
        name: 'SignUpPage',
        components: {
            Navbar,
            PageTitle,
            Signup,
        }
    }
</script>