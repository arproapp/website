<template>
    <div class="blog-section pt-100 pb-70">
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
        this.blog = await this.$strapi.find('blogcards', '_limit=3')
    }
}
</script>