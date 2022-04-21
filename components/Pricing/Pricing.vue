<template>
    <div class="pricing-section pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Our <span>Pricing</span> Plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div 
                class="row"
                v-if="pricings !== []"
            >
                <div 
                    class="col-lg-4 col-md-6 justify-content-center"
                    v-for="pricing in pricings"
                    :key="pricing.id"
                >
                    <div class="single-pricing">
                        <div class="pricing-header">
                            <h3>{{pricing.title}}</h3>
                            <p>{{pricing.subTitle}}</p>
                        </div>

                        <div class="price">
                            <sup>$</sup>{{pricing.price}}<sub>/mo</sub>
                        </div>
                
                        <ul class="pricing-list">
                            <li
                                v-for="list in pricing.lists"
                                :key="list.id"
                            >
                                <i :class="list.icon"></i> 
                                {{list.text}} 
                            </li>
                        </ul>

                        <div class="price-btn">
                            <NuxtLink 
                                :to="pricing.btnLink" 
                                class="default-btn"
                            >
                                {{pricing.btnText}}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="default-shape">
            <div class="shape-1">
                <img src="~/assets/images/shapes/shape-4.png" alt="image">
            </div>

            <div class="shape-2 rotateme">
                <img src="~/assets/images/shapes/shape-5.svg" alt="image">
            </div>

            <div class="shape-3">
                <img src="~/assets/images/shapes/shape-6.svg" alt="image">
            </div>

            <div class="shape-4">
                <img src="~/assets/images/shapes/shape-7.png" alt="image">
            </div>

            <div class="shape-5">
                <img src="~/assets/images/shapes/shape-8.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing',

    data(){
        return{
            pricings: []
        }
    },

    created: async function(){
        this.pricings = await this.$strapi.find('pricingcards')
    }
}
</script>