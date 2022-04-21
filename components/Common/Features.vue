<template>
    <div class="features-section pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Creative Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div 
                class="row"
                v-if="features !== []"
            >
                <div 
                    class="col-lg-3 col-md-6"
                    v-for="feature in features"
                    :key="feature.id"
                >
                    <div class="features-content">
                        <div class="icon">
                            <i :class="feature.icon"></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                        <p>{{feature.shortDesc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',

    data(){
        return{
            features: []
        }
    },

    created: async function(){
        this.features = await this.$strapi.find('creativefeatures')
    }
}
</script>