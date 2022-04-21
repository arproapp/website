<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Log In" />
        <Login />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Login from '../components/log-in/Login'

    export default {
        name: 'LogInPage',
        components: {
            Navbar,
            PageTitle,
            Login,
        }
    }
</script>