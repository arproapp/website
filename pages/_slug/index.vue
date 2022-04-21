<template>
    <div>
        <Navbar />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].title" 
        />

        <div v-if="details !== null">
            <ServicesDetails
                v-bind:detailsContent="details"
            />
        </div>
    </div>
</template>

<script>
import Navbar from '../../layouts/Navbar'
import PageTitle from '../../components/Common/PageTitle'
import ServicesDetails from '../../components/single-services/ServicesDetails'

export default {
    name: 'SingleServicesPage',
    components: {
        Navbar,
        PageTitle,
        ServicesDetails,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('servicesdetails', `slug=${slug}`)
    }
}
</script>