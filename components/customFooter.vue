<template>
  <v-footer class="mt-5 pb-2" color="#1b1c1d">
    <v-container class="mt-5" :class="!isMobile && 'd-flex'">
      <v-col cols="12" lg="4" md="4" sm="4" class="pa-0">
        <v-col class="px-0 format-link">
          <h2 :class="isMobile && 'text-center'">Fale conosco:</h2>
          <div :class="isMobile && 'text-center'">
            <a href="tel:+5562996480626"
              ><v-icon size="20">mdi-phone</v-icon> (62) 9 9648-0626</a
            >
          </div>
          <div :class="isMobile && 'text-center'">
            <a
              href="https://wa.me/5562996480626?text=Ol%C3%A1+Daniel%2C+%3A%29"
              target="_blank"
              ><v-icon size="20">mdi-whatsapp</v-icon> (62) 9 9648-0626</a
            >
          </div>
          <div :class="isMobile && 'text-center'">
            <a href="mailto:_daniel_@hotmail.com.br"
              ><v-icon size="20">mdi-email-outline</v-icon>
              _daniel_@hotmail.com.br</a
            >
          </div>
        </v-col>
        <v-col class="px-0" align-self="center">
          <h2 :class="isMobile && 'text-center'">Siga-nós:</h2>
          <div class="format-link" :class="isMobile && 'text-center'">
            <a
              v-for="social in socials"
              :key="social.icon"
              class="pr-2"
              :href="social.url"
              ><v-icon color="teste-color" size="20">{{
                social.icon
              }}</v-icon></a
            >
          </div>
        </v-col>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="4"
        :class="$vuetify.breakpoint.name === 'xs' && 'px-0'"
      >
        <ul class="clear-list">
          <li :class="isMobile && 'text-center'">
            <a href="#">Sobre nós</a>
          </li>
          <li :class="isMobile && 'text-center'">
            <a href="#">Termos e condições</a>
          </li>
          <li :class="isMobile && 'text-center'">
            <a href="#">Politica de privacidade</a>
          </li>
          <li :class="isMobile && 'text-center'"><a href="#">Regras</a></li>
          <li :class="isMobile && 'text-center'"><a href="#">Cookies</a></li>
          <li :class="isMobile && 'text-center'"><a href="#">LGPD</a></li>
        </ul>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="4"
        class="px-0"
        :class="isMobile && 'text-center'"
      >
        <div class="text-center">
          Inscreva-se para receber as nossas novidades
        </div>
        <validation-observer ref="subscribeValidationObserver">
          <validation-provider v-slot="{ errors }" rules="required|email">
            <div class="d-flex justify-center">
              <v-text-field
                v-model="email"
                class="mt-3"
                label="E-mail"
                outlined
                color="secondary"
                prepend-inner-icon="mdi-email"
                append-icon="mdi-send"
                hide-details="auto"
                :error-messages="errors"
                @click:append="subscribe"
              />
            </div>
          </validation-provider>
        </validation-observer>
      </v-col>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    email: '',
    socials: [
      {
        icon: 'mdi-facebook',
        url: '#',
      },
      {
        icon: 'mdi-twitter',
        url: '#',
      },
      {
        icon: 'mdi-instagram',
        url: '#',
      },
      {
        icon: 'mdi-linkedin',
        url: '#',
      },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.name === 'xs'
    },
  },
  methods: {
    async subscribe() {
      if (!(await this.$refs.subscribeValidationObserver.validate())) return
      this.$toast.success('Cadastro realizado com sucesso!')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
::v-deep .v-input {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    max-width: 330px;
  }
}
.clear-list {
  padding-left: 0;
  list-style: none;
  li {
    margin: 3px 0;
  }
}
</style>
