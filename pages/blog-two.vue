<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogTwo />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogTwo from '../components/blog-two/BlogTwo'

export default {
    name: 'BlogTwoPage',
    components: {
        Navbar,
        PageTitle,
        BlogTwo,
    }
}
</script>