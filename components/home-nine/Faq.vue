<template>
    <div class="faq-section pb-100">
        <div class="container">
            <div class="section-title">
                <h2>Frequently <span>Asked</span> Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div class="bar"></div>
            </div>


            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="faq-accordion">
                        <ul class="accordion" role="tablist">
                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-1 variant="info"><i class='bx bx-chevron-down'></i>What's The Difference Between IDS And IBS?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-2 variant="info"><i class='bx bx-chevron-down'></i>How Is Encryption Different From Hacking<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-3 variant="info"><i class='bx bx-chevron-down'></i>What Is Firewall And Why It Is Used?<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="accordion-item">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="accordion-title" block v-b-toggle.accordion-4 variant="info"><i class='bx bx-chevron-down'></i>What Steps Will You Take To Secure server<span></span></b-button>
                                </b-card-header>
                                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="faq-image">
                        <img src="~/assets/images/faq.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Faq',
    }
</script>