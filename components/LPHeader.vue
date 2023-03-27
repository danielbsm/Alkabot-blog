<template>
  <v-app-bar elevation="0" app fixed color="#1b1c1d">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" class="hidden-lg-and-up" v-on="on" />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          @click="menuClick(item.to)"
        >
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-title class="d-flex ml-3 ml-lg-0">
      <div class="brand" @click="menuClick('/')">Alkabot</div>
    </v-toolbar-title>

    <v-toolbar-items class="hidden-md-and-down pl-5">
      <v-btn
        v-for="(item, index) in menu"
        :key="index"
        class="px-3 text-capitalize"
        text
        @click="menuClick(item.to)"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu offset-y close-on-click>
        <template #activator="{ on }">
          <v-btn class="px-3 text-capitalize" elevation="0" text v-on="on">
            {{ $vuetify.lang.t(currentLocate.lang) }}
            <img
              :src="`flags/${currentLocate.flag}`"
              alt="flag"
              width="22"
              class="ml-2"
              right
            />
            <v-icon right> mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group v-model="currentLocate">
            <v-list-item
              v-for="locale in locales"
              :key="locale.key"
              :value="locale.key"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex align-center justify-space-between"
                >
                  <div>
                    {{ locale.lang }}
                  </div>

                  <img
                    :key="locale.key"
                    :src="`flags/${locale.flag}`"
                    alt="flag"
                    width="22"
                    class="ml-2"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: 'Inicio',
          to: '/',
        },
        {
          title: 'Mais lidos',
          to: '/mais-lidos',
        },
        {
          title: 'Autores',
          to: '/autores',
        },
      ],
      currentLocate: {
        lang: 'Português',
        flag: 'brazil-flag.png',
        key: 'pt-BR',
      },
      locales: [
        {
          lang: 'Português',
          flag: 'brazil-flag.png',
          key: 'pt-BR',
        },
        {
          lang: 'Español',
          flag: 'spain-flag.png',
          key: 'SPN',
        },
        {
          lang: 'English',
          flag: 'usa-flag.png',
          key: 'eua',
        },
      ],
    }
  },
  methods: {
    menuClick(route) {
      this.$router.push(route)
    },
  },
}
</script>
<style lang="scss">
.v-toolbar__content {
  width: 100%;
  max-width: 1185px !important;
  padding: 0 12px !important;
}
.brand {
  font-size: 25px;
  font-weight: bold;
  background: rgb(104, 102, 138);
  background: linear-gradient(
    7deg,
    rgba(104, 102, 138, 1) 1%,
    rgba(99, 99, 222, 1) 50%,
    rgba(19, 95, 111, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}
</style>
