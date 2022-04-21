<template>
    <div class="projects-section ptb-70">
        <div class="container-fluid">
            <div class="section-title">
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <ProjectCard 
                v-if="projects !== []"
                :singleProject="projects"
            />
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