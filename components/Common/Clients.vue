<template>
    <div class="clients-section">
        <div class="container">
            <div class="section-title">
                <h2>What Our Clients Say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="clients-slider owl-carousel owl-theme">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :speed="1000"
                    :autoplayTimeout="7000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1]]"
                    v-if="clients !== []"
                >
                    <slide
                        v-for="client in clients"
                        :key="client.id"
                    >
                        <div class="clients-item">
                            <div class="icon">
                                <i :class="client.icon"></i>
                            </div>

                            <p>{{client.shortDesc}}</p>

                            <div class="clients-content">
                                <h3>{{client.name}}</h3>
                                <span>{{client.position}}</span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Clients',

    data(){
        return{
            clients: []
        }
    },

    created: async function(){
        this.clients = await this.$strapi.find('ourclients')
    }
}
</script>