<template>
    <div class="login-section ptb-100">
        <div class="container">
            <div class="login-form">
                <div 
                    class="login-title"
                    v-if="login !== null"
                >
                    <h3>{{login.title}}</h3>
                    <p>{{login.shortDesc}}</p>
                </div>
                    
                <form>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="checkme">
                                <label class="form-check-label" for="checkme">Keep me Log In</label>
                            </div>
                        </div>

                        <div class="col-lg-12 text-right">
                            <p class="forgot-password"><a href="#">Forgot Password?</a></p>
                        </div>

                        <div class="col-lg-12">
                            <div class="send-btn">
                                <button type="submit" class="default-btn">
                                    Log In Now
                                    <span></span>
                                </button>
                            </div>
                            <br>
                            <span>Don't have account? <NuxtLink to="/sign-up">Signup!</NuxtLink></span>
                        </div>
                    </div>
                </form>
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
export default {
    name: 'Login',

    data(){
        return{
            login: null
        }
    },

    created: async function(){
        this.login = await this.$strapi.find('login')
    }
}
</script>