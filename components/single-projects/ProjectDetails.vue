<template>
    <div class="project-details-area ptb-100">
        <div class="container">
            <div class="project-details-image">
                <img :src="details[0].img.url" alt="projects">
            </div>
            <div class="projects-details-desc">
                <h3>{{details[0].title}}</h3>

                <span v-html="details[0].longDesc"></span>

                <div class="project-details-info">
                    <div 
                        class="single-info-box"
                        v-for="info in details[0].infos"
                        :key="info.id"
                    >
                        <h4>{{info.title}}</h4>
                        <span>{{info.subTitle}}</span>
                    </div>
                    <div class="single-info-box">
                        <h4>Share</h4>
                        <ul class="social">
                            <li><a href="#" target="_blank"><i class="flaticon-facebook"></i></a></li>
                            <li><a href="#" target="_blank"><i class="flaticon-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="flaticon-pinterest"></i></a></li>
                            <li><a href="#" target="_blank"><i class="flaticon-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div class="single-info-box">
                        <a href="#" class="default-btn">Live Preview</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetails',

    props: ['detailsContent'],

    data: function (){
        return {
            details: this.detailsContent
        }
    }
}
</script>