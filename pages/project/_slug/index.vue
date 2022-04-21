<template>
    <div>
        <Navbar />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].title" 
        />

        <div v-if="details !== null">
            <ProjectDetails 
                v-bind:detailsContent="details"
            />
        </div>
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import ProjectDetails from '../../../components/single-projects/ProjectDetails'

export default {
    name: 'SingleProjectsPage',
    components: {
        Navbar,
        PageTitle,
        ProjectDetails,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('projectsdetails', `slug=${slug}`)
    }
}
</script>