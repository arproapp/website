<template>
    <div class="main-banner-area-nine">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="main-banner-content">
                        <span>Digital Marketing</span>
                        <h1>Digital Service With Excellent Quality</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>
                        <div class="banner-btn">
                            <a href="#" class="default-btn">Get Started</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 pr-0">
                    <div class="image-sliders owl-carousel owl-theme">
                        <carousel
                            :autoplay="true"
                            :loop="true"
                            :speed="1000"
                            :autoplayTimeout="7000"
                            :paginationEnabled="false"
                            :perPageCustom="[[0, 1]]"
                            :perPage="1"
                            :navigationEnabled="true"
                            navigationNextLabel="<i class='flaticon-right'></i>"
                            navigationPrevLabel="<i class='flaticon-left'></i>"
                        >
                            <slide v-for="item in carouselItems" :key="item.id">
                                <div class="image-item">
                                    <img :src="item.image" alt="image">
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from '~/assets/images/slider1.jpg'
import image2 from '~/assets/images/slider2.jpg'
import image3 from '~/assets/images/slider3.jpg'
import image4 from '~/assets/images/slider1.jpg'
import image5 from '~/assets/images/slider2.jpg'

export default {
    name: 'MainBanner',
    data() {
        return {
            carouselItems: [
                {
                    id: 1,
                    image: image1,
                },
                {
                    id: 2,
                    image: image2,
                },
                {
                    id: 3,
                    image: image3,
                },
                {
                    id: 4,
                    image: image4,
                },
                {
                    id: 5,
                    image: image5,
                },
            ]
        }
    }
}
</script>