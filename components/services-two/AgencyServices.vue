<template>
    <div class="agency-services-section pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <h2>SEO  Agency <span>Services</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-1.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Creative Web Develop</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Web Design</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-2.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Digital Services</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Agency</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-3.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Complex Design</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Solutions</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-4.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Software Engineers</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Analysis</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-5.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Marketing Agency</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Marketing</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-agency">
                        <div class="image">
                            <NuxtLink to="/single-services">
                                <img src="~/assets/images/agency/agency-6.png" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="content">
                            <NuxtLink to="/single-services">
                                <h3>Data Analysis</h3>
                            </NuxtLink>
                            <NuxtLink to="/single-services">
                                <span>Explanation</span>
                            </NuxtLink>
                        </div>
                    </div>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AgencyServices'
    }
</script>