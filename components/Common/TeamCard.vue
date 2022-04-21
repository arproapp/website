<template>
    <div class="row">
        <div 
            class="col-lg-4 col-md-6 col-sm-6 justify-content-center"
            v-for="team in teamItem"
            :key="team.id"
        >
            <div class="team-item">
                <div class="image">
                    <img :src="team.img.url" alt="image">

                    <ul class="social">
                        <li>
                            <a href="#" target="_blank">
                                <i class="bx bxl-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="bx bxl-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="bx bxl-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="bx bxl-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="content">
                    <h3>{{team.name}}</h3>
                    <span>{{team.position}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamCard',
    props: ['teamItem']
}
</script>