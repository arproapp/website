<template>
    <div>
        <div class="copyright-area">
            <div class="container">
                <div class="copyright-area-content">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; 2022 ARPROapp
                            </p>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <NuxtLink to="/terms-condition">Terms & Conditions</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <back-to-top bottom="50px" right="50px">
                <div class="go-top">
                <i class="bx bx-chevron-up"></i>
                <i class="bx bx-chevron-up"></i>
            </div>
            </back-to-top>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data(){
        return{
            footer: null
        }
    },

    created: async function(){
        this.footer = await this.$strapi.find('footer')
    }
}
</script>