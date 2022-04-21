<template>
  <div class="tab-section ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>¿Estás listo para hacer crecer tu negocio con nosotros?</h2>
        <p>
          Dejanos un mensaje, Nos pondremos en contacto lo antes posible.
        </p>
        <div class="bar"></div>
      </div>
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "../Contact/Contact.vue";
export default {
  name: "Tab",
  components: {
    Contact,
  },
  data() {
    return {
      tabs: [],
    };
  },

  created: async function () {
    this.tabs = await this.$strapi.find("outstandings");
  },
};
</script>
