<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="services-details-area ptb-100">
            <div class="container">
                <div class="services-details-video">
                    <div class="details-image">
                        <img :src="details[0].img.url" alt="image">
                    </div>

                    <div class="details-video">
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

                    <div class="text">
                        <h3>{{details[0].title}}</h3>
                        <p>{{details[0].shortDesc}}</p>
                    </div>
                </div>

                <div class="services-details-overview">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-desc">
                                <h3>{{details[0].heading}}</h3>
                                <p>{{details[0].shortText}}</p>

                                <div 
                                    class="features-text"
                                    v-for="feature in details[0].features"
                                    :key="feature.id"
                                >
                                    <h4>{{feature.title}}</h4>
                                    <p>{{feature.shortDesc}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-image">
                                <img :src="details[0].imgTwo.url" alt="image">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="services-details-overview">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-image">
                                <img :src="details[0].imgThree.url" alt="image">
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="services-details-desc">
                                <h3>{{details[0].headingOne}}</h3>
                                <p>{{details[0].shortTextOne}}</p>

                                <div class="services-details-accordion">
                                    <ServicesAccordion />
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
    import ServicesAccordion from '../single-services/ServicesAccordion'

    export default {
        name: 'ServicesDetails',
        components: { 
            CoolLightBox ,
            ServicesAccordion
        },

        props: ['detailsContent'],

        data: function () {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=sdpxddDzXfE"
                    }
                ],
                index: null,
                details: this.detailsContent
            };
        }
    }
</script>