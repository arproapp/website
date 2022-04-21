<template>
    <div class="conditions-section ptb-100">
        <div class="container">
            <div 
                class="single-privacy"
                v-if="condition !== null"
            >
                <span v-html="condition.longDesc"></span>
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
    name: 'Conditions',

    data(){
        return{
            condition: null
        }
    },

    created: async function(){
        this.condition = await this.$strapi.find('termscondition')
    }
}
</script>