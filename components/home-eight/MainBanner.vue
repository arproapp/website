<template>
  <div class="main-banner-area-eight">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="main-banner-content p-10 m-10">
                <h2>¿Estás listo para hacer crecer tu negocio con nosotros?</h2>
                <p>
                  Dejanos un mensaje, Nos pondremos en contacto lo antes
                  posible.
                </p>
              </div><br><br>

              <div class="d-grid gap-3">
                <div class="p-2">
                  <h5>(878) 146 2131</h5>
                  <p>Soporte Técnico.</p>
                </div>
                <div class="p-2">
                  <h5>soporte@arproapp.com</h5>
                  <p>Correo de Soporte Técnico.</p>
                </div>
                <div class="p-2">
                  <h5>soporte@arproapp.com</h5>
                  <p>Correo de Soporte Técnico.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="banner-form">
                <form id="contactForm">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                      placeholder="Nombre"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      required
                      placeholder="Correo Electronico"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      class="form-control"
                      required
                      placeholder="Asunto"
                    />
                  </div>

                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="6"
                      required
                      placeholder="Mensaje"
                    ></textarea>
                  </div>

                  <button type="submit" class="default-btn">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="default-shape">
      <div class="shape-1">
        <img src="~/assets/images/shapes/shape-4.png" alt="image" />
      </div>

      <div class="shape-2 rotateme">
        <img src="~/assets/images/shapes/shape-5.svg" alt="image" />
      </div>

      <div class="shape-3">
        <img src="~/assets/images/shapes/shape-6.svg" alt="image" />
      </div>

      <div class="shape-4">
        <img src="~/assets/images/shapes/shape-7.png" alt="image" />
      </div>

      <div class="shape-5">
        <img src="~/assets/images/shapes/shape-8.png" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
