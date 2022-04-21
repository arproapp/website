<template>
    <div class="row">
        <div 
            class="col-lg-4 col-md-6"
            v-for="service in singleService"
            :key="service.id"
        >
            <div class="single-services">
                <div class="icon">
                    <i :class="service.icon"></i>
                </div>
                <h3>
                    <NuxtLink :to="service.slug">
                        {{service.title}}
                    </NuxtLink>
                </h3>
                <p>
                    {{service.shortDesc}}
                </p>
                <NuxtLink 
                    :to="service.slug" 
                    class="read-btn"
                >
                    {{service.btnText}}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesCard',
    props: ['singleService']
}
</script>