<template>
    <div>
        <Preloader v-if="isLoading" />
        <HomeSeven />
        <Footer />
    </div>
</template>

<script>
import Preloader from './Preloader'
import Footer from './Footer'
import HomeSeven from '../pages/home-seven.vue'

export default {
    components: {
    Preloader,
    Footer,
    HomeSeven
},
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>