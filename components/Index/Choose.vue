<template>
    <div class="choose-section ptb-100">
        <div 
            class="container"
            v-if="content !== null"
        >
            <div class="section-title">
                <h2>
                    {{content.heading}}
                </h2>
                <p>
                    {{content.shortDesc}}
                </p>
                <div class="bar"></div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div 
                        class="choose-content"
                        v-for="choose in content.chooses"
                        :key="choose.id"
                    >
                        <div class="icon">
                            <i :class="choose.icon"></i>
                        </div>
                        <h3>{{choose.title}}</h3>
                        <p>{{choose.shortDesc}}</p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="choose-image">
                        <img :src="content.img.url" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Choose',

    data(){
        return{
            content: null
        }
    },

    created: async function(){
        this.content = await this.$strapi.find('chooseus')
    }
}
</script>