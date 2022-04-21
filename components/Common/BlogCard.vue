<template>
    <div class="row">
        <div 
            class="col-lg-4 col-md-6 justify-content-center"
            v-for="blog in singleBlog"
            :key="blog.id"
        >
            <div class="single-blog">
                <div class="image">
                    <NuxtLink :to="`/blog/${blog.slug}`">
                        <img :src="blog.img.url" alt="image">
                    </NuxtLink>
                </div>

                <div class="content">
                    <span>{{blog.date}}</span>
                    <h3>
                        <NuxtLink :to="`/blog/${blog.slug}`">
                            {{blog.title}}
                        </NuxtLink>
                    </h3>
                    <p>{{blog.shortDesc}}</p>
                    <NuxtLink 
                        :to="`/blog/${blog.slug}`" 
                        class="read-more"
                    >
                        {{blog.btnText}}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: ['singleBlog']
}
</script>