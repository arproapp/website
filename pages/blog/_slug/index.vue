<template>
    <div>
        <Navbar />
        <PageTitle
            v-if="details !== null"
            :pageTitle="details[0].title" 
        />
        <div v-if="details !== null">
            <SingleBlog 
                v-bind:detailsContent="details"
            />
        </div>
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import SingleBlog from '../../../components/single-blog/SingleBlog'

export default {
    name: 'SingleBlogPage',
    components: {
        Navbar,
        PageTitle,
        SingleBlog,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('blogdetails', `slug=${slug}`)
    }
}
</script>