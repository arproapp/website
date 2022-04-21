<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog" />
        <Blog />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Blog from '../components/blog-one/Blog'

    export default {
        name: 'BlogOnePage',
        components: {
            Navbar,
            PageTitle,
            Blog,
        }
    }
</script>