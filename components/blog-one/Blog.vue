<template>
    <div class="blog-section ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our <span>Latest</span> News</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <BlogCard
                    v-if="blog !== []"
                    :singleBlog="blog" 
                />

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
        </div>
    </div>
</template>

<script>
import BlogCard from '../Common/BlogCard'

export default {
    name: 'Blog',

    components: {
        BlogCard
    },

    data(){
        return{
            blog: []
        }
    },

    created: async function(){
        this.blog = await this.$strapi.find('blogcards')
    }
}
</script>