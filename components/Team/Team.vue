<template>
    <div class="team-section pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our Expert Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <TeamCard
                    v-if="teams !== []"
                    :teamItem="teams"
                />
            </div>

            <div class="col-lg-12 col-md-12">
                <div class="pagination-area">
                    <a href="#" class="prev page-numbers">
                        <i class="flaticon-left"></i>
                    </a>
                    <a href="#" class="page-numbers">1</a>
                    <span class="page-numbers current" aria-current="page">2</span>
                    <a href="#" class="page-numbers">3</a>
                    <a href="#" class="page-numbers">4</a>
                    <a href="#" class="next page-numbers">
                        <i class="flaticon-right"></i>
                    </a>
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
import TeamCard from '../Common/TeamCard'

export default {
    name: 'Team',

    components: {
        TeamCard
    },

    data(){
        return{
            teams: []
        }
    },

    created: async function(){
        this.teams = await this.$strapi.find('teamcards')
    }
}
</script>