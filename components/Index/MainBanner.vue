<template>
    <div class="main-banner-area">
        <div class="home-sliders owl-carousel owl-theme">
            <carousel
                :autoplay="true"
                :loop="true"
                :speed="1000"
                :autoplayTimeout="7000"
                :paginationEnabled="true"
                :perPageCustom="[[0, 1]]"
                v-if="banners !== []"
            >
                <slide
                    v-for="banner in banners"
                    :key="banner.id"
                >
                    <div :class="`home-item ${banner.class}`">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="container">
                                    <div class="main-banner-content">
                                        <h1>{{banner.heading}}</h1>
                                        <p>
                                            {{banner.ShortDesc}}
                                        </p>
                                        <div class="banner-btn">
                                            <a href="#" class="default-btn">
                                                {{banner.btnText}}
                                            </a>
                                        </div>
                                    </div>

                                    <div class="banner-image">
                                        <img src="~/assets/images/shapes/shape-11.png" alt="image">

                                        <img 
                                            :src="banner.img.url" 
                                            class="banner-img" 
                                            alt="image"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainBanner',

    data(){
        return{
            banners: []
        }
    },

    created: async function(){
        this.banners = await this.$strapi.find('bannerdefaulthomepages')
    }
}
</script>