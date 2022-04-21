<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="work-section pb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="work-content">
                            <h3>Brainstorming, <span>Researching</span> Planning, Strategizing Work</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dood tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="work-status">
                                        <h3>
                                            50K
                                        </h3>
                                        <h4>Completed Project</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="work-status">
                                        <h3>
                                            98%
                                        </h3>
                                        <h4>Customer Satisfaction</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 pr-0">
                        <div class="work-image">
                            <img src="~/assets/images/work-bg.jpg" alt="image">

                            <div class="work-video">
                                <div
                                    class="video-btn popup-youtube"
                                    v-for="(image, imageIndex) in items"
                                    :key="imageIndex"
                                    @click="index = imageIndex"
                                    style="cursor: pointer"
                                >
                                    <i class="flaticon-play"></i>
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
        name: 'Work',
        components: { CoolLightBox },
        data: function () {
            return {
                items: [
                    {
                        src: 'https://www.youtube.com/watch?v=sdpxddDzXfE',
                    }
                ],
                index: null
            };
        },
    }
</script>