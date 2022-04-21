<template>
    <div class="projects-section pt-100 pb-70">
        <div class="container-fluid">
            <div class="section-title">
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <ProjectCard 
                    v-if="projects !== []"
                    :singleProject="projects"
               />

               <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <a href="#" class="prev page-numbers">
                            <i class="flaticon-left"></i>
                        </a>
                        <a href="#" class="page-numbers">1</a>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <a href="#" class="page-numbers">3</a>
                        <a href="#" class="page-numbers">4</a>
                        <a href="#" class="next page-numbers">
                            <i class="flaticon-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '../Common/ProjectCard'

export default {
    name: 'Projects',

    components: {
        ProjectCard
    },

    data(){
        return{
            projects: []
        }
    },

    created: async function(){
        this.projects = await this.$strapi.find('projectcards')
    }
}
</script>