<template>
    <div class="development-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="content !== null"
            >
                <div class="col-lg-6">
                    <div class="development-image">
                        <img :src="content.img.url" alt="image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="development-text">
                        <h3>{{content.heading}}</h3>
                        <div class="bar"></div>
                        <p>
                            {{content.shortDesc}}
                        </p>
                    </div>

                    <div 
                        class="development-content"
                        v-for="develop in content.development"
                        :key="develop.id"
                    >
                        <div :class="develop.class">
                            <i :class="develop.icon"></i>
                        </div>
                        <h3>{{develop.title}}</h3>
                        <p>{{develop.shortDesc}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Development',

    data(){
        return{
            content: null
        }
    },

    created: async function(){
        this.content = await this.$strapi.find('mobiledevelopment')
    }
}
</script>