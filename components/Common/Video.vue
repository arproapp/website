<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="video-section">
            <div class="container">
                <div class="video-content">
                    <div
                        class="video-btn popup-youtube"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        style="cursor: pointer"
                    >
                        <i 
                            v-if="video !== null"
                            :class="video.icon"
                        >
                        </i>
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
    name: 'Video',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [],
            index: null,
            video: null
        };
    },

    created: async function(){
        let obj = {}
        this.video = await this.$strapi.find('video')
        this.items.push({"src": this.video.videoLink})
    }
}
</script>