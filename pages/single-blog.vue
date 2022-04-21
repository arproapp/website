<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Single Blog" />
        <SingleBlog />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import SingleBlog from '../components/single-blog/SingleBlog'

    export default {
        name: 'SingleBlogPage',
        components: {
            Navbar,
            PageTitle,
            SingleBlog,
        }
    }
</script>