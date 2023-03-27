<template>
  <v-card
    color="#424242"
    width="100%"
    max-width="282.26px"
    class="pa-5 pb-2 mb-3 mx-1"
  >
    <div class="d-flex flex-column align-center">
      <user-avatar
        class="mb-2"
        :size="70"
        :name="name"
        :color-avatar="'#fff'"
        :color-text="'black'"
        :avatar-with-image="true"
      />
      <span class="text-truncate text-center white--text mb-5">{{ name }}</span>
      <span class="mb-5 text-center text-caption" style="height: 30px"
        ><v-icon color="white" size="18">mdi-map-marker</v-icon> {{ address }}
      </span>
      <v-card-actions class="pa-0">
        <a class="mx-2" :href="`mailto: ${email}`">
          <v-icon>mdi-email</v-icon>
        </a>
        <a class="mx-2" :href="`tel:+${phone}`">
          <v-icon>mdi-phone</v-icon>
        </a>
        <a class="mx-2" :href="`https://${website}`" target="_blank">
          <v-icon>mdi-web</v-icon>
        </a>
        <a
          class="mx-2"
          :href="`https://www.google.com/maps/search/?api=1&query=${fullAddress.geo.lat},${fullAddress.geo.lng}`"
          target="_blank"
        >
          <v-icon>mdi-map</v-icon>
        </a>
      </v-card-actions>
      <v-col cols="12" class="pa-0 text-center mt-5">
        <v-btn
          class="text-caption font-weight-bold"
          text
          :to="`/autor/posts/${id}`"
        >
          Ver todos Posts</v-btn
        >
      </v-col>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: Object,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  computed: {
    address() {
      return (
        this.fullAddress.street +
        ' - ' +
        this.fullAddress.suite +
        ', ' +
        this.fullAddress.city
      )
    },
  },
}
</script>
