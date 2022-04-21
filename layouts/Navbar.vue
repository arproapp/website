<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="valzo-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink 
                        class="navbar-brand" 
                        to="/"
                        v-if="logo !== null"
                    >
                        <img :src="logo.img.url" alt="logo">
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink  to="/" class="nav-link" exact>
                                    Home 
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink  to="/about" class="nav-link">
                                    About
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink  to="/services-one" class="nav-link">
                                    Services
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink  to="/projects-one" class="nav-link">
                                    Projects
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Pages 
                                    <i class='bx bx-chevron-down'></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink  to="/about" class="nav-link">
                                            About
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink  to="/team" class="nav-link">
                                            Team
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink  to="/pricing" class="nav-link">
                                            Pricing
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink  to="/faq" class="nav-link">
                                            FAQ
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            User 
                                            <i class='bx bx-chevron-down'></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink  to="/log-in" class="nav-link">
                                                    Log In
                                                </NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink  to="/sign-up" class="nav-link">
                                                    Sign Up
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink  to="/terms-condition" class="nav-link">
                                            Terms & Conditions
                                        </NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink  to="/privacy-policy" class="nav-link">
                                            Privacy Policy
                                        </NuxtLink>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <NuxtLink  to="/contact" class="nav-link">
                                            Contact
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <NuxtLink  to="/blog-one" class="nav-link">
                                    Blog 
                                </NuxtLink>
                            </li>

                            <li class="nav-item">
                                <NuxtLink  to="/contact" class="nav-link">
                                    Contact
                                </NuxtLink>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-options">
                        <div class="burger-menu" v-on:click="isMenuMethod(isMenu)">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <div class="sidebar-modal" v-if="isMenu">
                            <div class="sidebar-modal-inner">
                                <div class="sidebar-about">
                                    <div class="title">
                                        <h2>About Us</h2>
                                        <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                    </div>
                                </div>

                                <div class="sidebar-contact-feed">
                                    <h2>Contact</h2>
                                    <div class="contact-form">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" name="name" id="name" class="form-control" required placeholder="Your Name">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <input type="email" name="email" id="email" class="form-control" required placeholder="Your Email">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" name="phone_number" id="phone_number" required class="form-control" placeholder="Your Phone">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required placeholder="Your Subject">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="send-btn">
                                                        <button type="submit" class="send-btn-one">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="sidebar-contact-area">
                                    <div class="contact-info">
                                        <div class="contact-info-content">
                                            <h2>
                                                <a href="tel:8781462131">
                                                    8781462131
                                                </a>
                                                <span>OR</span>
                                                <a href="mailto:ventas@arproapp.com">
                                                    ventas@arproapp.com
                                                </a>
                                            </h2>

                                            <ul class="social">
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class="flaticon-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class="flaticon-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class="flaticon-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i class="flaticon-pinterest"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <span 
                                    class="close-btn"  
                                    v-on:click="isMenuMethod(isMenu)"
                                >
                                    <i class="flaticon-cancel"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            isSticky: false,
            logo: null,
            isMenu: false
        }
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
    created: async function (){
        this.logo = await this.$strapi.find('sitelogo')
    },
    methods: {
        isMenuMethod(isMenu){
            console.log(this.isMenu)
            return this.isMenu = !isMenu
        }
    }
}
</script>