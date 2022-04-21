<template>
    <div class="clients-section pb-100">
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
                >
                    <slide>
                        <div class="clients-item">
                            <div class="icon">
                                <i class="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                            <div class="clients-content">
                                <h3>Moris Jacker</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="clients-item">
                            <div class="icon">
                                <i class="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                            <div class="clients-content">
                                <h3>Alex Maxwel</h3>
                                <span>Agent Management</span>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="clients-item">
                            <div class="icon">
                                <i class="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                            <div class="clients-content">
                                <h3>Edmond Halley</h3>
                                <span>Web Designer</span>
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
    name: 'Clients'
}
</script>