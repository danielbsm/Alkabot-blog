<template>
  <v-app dark>
    <v-main>
      <LPHeader />
      <v-container>
        <LPCarousel />
        <Nuxt />
      </v-container>
    </v-main>
    <custom-footer />
  </v-app>
</template>
<script>
export default {
  name: 'Default',
}
</script>
