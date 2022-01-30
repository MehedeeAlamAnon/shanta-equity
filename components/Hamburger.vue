<template>
  <button
    id="hamburger-menu"
    class="hamburger-menu text-uppercase text-bold" @click="changeMegaMenu"
  >
    <span class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </span>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hamburger',
  methods: {
    ...mapActions(['changeMegaMenu'])
  }
}
</script>
