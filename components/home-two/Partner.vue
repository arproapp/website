<template>
    <div class="partner-area ptb-50">
        <div class="container">
            <div class="partner-slides owl-carousel owl-theme">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :speed="1000"
                    :autoplayTimeout="7000"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 1], [576, 1], [768, 3], [1024, 4], [1200, 5]]"
                >
                    <slide v-for="item in carouselItems" :key="item.id">
                        <div class="partner-item">
                        <a href="#" target="_blank">
                            <img :src="item.image" alt="image" />
                        </a>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from "~/assets/images/partner/partner-1.png";
import image2 from "~/assets/images/partner/partner-2.png";
import image3 from "~/assets/images/partner/partner-3.png";
import image4 from "~/assets/images/partner/partner-4.png";
import image5 from "~/assets/images/partner/partner-5.png";
import image6 from "~/assets/images/partner/partner-6.png";
import image7 from "~/assets/images/partner/partner-7.png";
import image8 from "~/assets/images/partner/partner-8.png";
import image9 from "~/assets/images/partner/partner-1.png";
import image10 from "~/assets/images/partner/partner-2.png";
import image11 from "~/assets/images/partner/partner-3.png";
import image12 from "~/assets/images/partner/partner-4.png";
import image13 from "~/assets/images/partner/partner-5.png";
import image14 from "~/assets/images/partner/partner-6.png";
import image15 from "~/assets/images/partner/partner-7.png";

export default {
  name: "Partner",
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: image1
        },
        {
          id: 2,
          image: image2
        },
        {
          id: 3,
          image: image3
        },
        {
          id: 4,
          image: image4
        },
        {
          id: 5,
          image: image5
        },
        {
          id: 6,
          image: image6
        },
        {
          id: 7,
          image: image7
        },
        {
          id: 8,
          image: image8
        },
        {
          id: 9,
          image: image9
        },
        {
          id: 10,
          image: image10
        },
        {
          id: 11,
          image: image11
        },
        {
          id: 12,
          image: image12
        },
        {
          id: 13,
          image: image13
        },
        {
          id: 14,
          image: image14
        },
        {
          id: 15,
          image: image15
        }
      ]
    };
  }
};
</script>
