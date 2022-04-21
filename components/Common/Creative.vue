<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="creative-section pb-100">
            <div class="container">
                <div 
                    class="row align-items-center"
                    v-if="creative !== null"
                >
                    <div class="col-lg-6">
                        <div class="creative-content">
                            <h3>{{creative.heading}}</h3>
                            <div class="bar"></div>
                            <p>
                                {{creative.shortDesc}}
                            </p>
                        </div>

                        <div 
                            class="progress-content"
                            v-for="progres in creative.progress"
                            :key="progres.id"
                        >
                            <div class="progress-text">
                                <span>
                                    {{progres.position}}
                                </span>
                                <p>{{progres.percentage}}</p>
                            </div>

                            <div class="progress">
                                <div 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    :style="progres.style"
                                >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="creative-image">
                            <img :src="creative.img.url" alt="image">
                            
                            <div class="creative-video">
                                <div
                                    class="video-btn popup-youtube"
                                    v-for="(image, imageIndex) in items"
                                    :key="imageIndex"
                                    @click="index = imageIndex"
                                    style="cursor: pointer"
                                >
                                    <i class="bx bx-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'Creative',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [],
            index: null,
            creative: null
        };
    },

    created: async function(){
        let obj = {}
        this.creative = await this.$strapi.find('creativeideas')
        this.items.push({"src": this.creative.videoLink})
    }
}
</script>