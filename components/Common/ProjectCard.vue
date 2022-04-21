<template>
    <div class="row">
        <div 
            class="col-lg-4"
            v-for="project in singleProject"
            :key="project.id"
        >
            <div class="single-projects">
                <div class="projects-image">
                    <img :src="project.img.url" alt="image">
                </div>

                <div class="projects-content">
                    <NuxtLink :to="`/project/${project.slug}`">
                        <h3>{{project.title}}</h3>
                    </NuxtLink>
                    
                    <NuxtLink :to="`/project/${project.slug}`">
                        <span>{{project.subTitle}}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['singleProject']
}
</script>