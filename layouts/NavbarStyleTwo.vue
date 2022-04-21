<template>
  <div :class="['navbar-area navbar-two', { 'is-sticky': isSticky }]">
    <div class="valzo-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img src="~/assets/images/arpro.svg" alt="logo" />
          </NuxtLink>

          <b-navbar-toggle target="navbarSupportedContent">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </b-navbar-toggle>

          <b-collapse
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
            is-nav
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link"> Inicio</a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Facebook
                  <i class="bx fa fa-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Instagram
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </b-collapse>

          <div class="others-options">
            <NuxtLink to="/sign-up" class="default-btn"
              >Iniciar Sesion</NuxtLink
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarStyleTwo",

  data() {
    return {
      isSticky: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>
