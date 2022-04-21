<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Contact" />
        <ContactBox />
        <Contact />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ContactBox from '../components/Contact/ContactBox'
    import Contact from '../components/Contact/Contact'

    export default {
        name: 'ContactPage',
        components: {
            Navbar,
            PageTitle,
            ContactBox,
            Contact,
        }
    }
</script>