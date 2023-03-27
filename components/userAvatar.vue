<template>
  <v-avatar :size="size" :color="colorAvatar">
    <span
      v-if="!avatarWithImage"
      class="font-weight-bold"
      :class="`${colorText}--text`"
      >{{ acronymsName(name) }}</span
    >
    <img v-else src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    colorAvatar: {
      type: String,
      default: '#fff',
    },
    colorText: {
      type: String,
      default: '#000',
    },
    size: {
      type: Number,
      default: 22,
    },
    avatarWithImage: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    acronymsName(name) {
      const splitName = name.split(' ')
      return splitName.length > 1
        ? splitName[0].substr(0, 1).toUpperCase() +
            splitName[1].substr(0, 1).toUpperCase()
        : splitName[0].substr(0, 2).toUpperCase()
    },
  },
}
</script>

<style>
</style>
