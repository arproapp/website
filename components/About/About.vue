<template>
    <div class="about-section ptb-100">
        <div class="container-fluid">
            <div 
                class="row"
                v-if="about !== null"
            >
                <div class="col-lg-6 p-0">
                    <div class="about-image">
                        <img :src="about.img.url" alt="image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-tab">
                        <h2>{{about.heading}}</h2>
                        <div class="bar"></div>
                        <p>{{about.shortDesc}}</p>

                        <div class="about-list-tab">
                            <b-tabs content-class="mt-3">
                                <b-tab 
                                    v-for="tab in about.tabs"
                                    :key="tab.id"
                                    :title="tab.title"
                                >
                                    <div class="tabs_item">
                                        <div class="text">
                                            <h3>{{tab.heading}}</h3>
                                        </div>

                                        <ul class="list">
                                            <li
                                                v-for="list in tab.lists"
                                                :key="list.id"
                                            >
                                                <i :class="list.icon"></i>
                                                {{list.text}}
                                            </li>
                                        </ul>

                                        <p>{{tab.shortDesc}}</p>

                                        <a class="default-btn" href="#">
                                            {{tab.btnText}}
                                        </a>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',

    data(){
        return{
            about: null
        }
    },

    created: async function(){
        this.about = await this.$strapi.find('about')
    }
}
</script>