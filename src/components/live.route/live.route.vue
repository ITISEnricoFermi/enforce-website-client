<template>
<div class="main">
  <header class="header">
    <a href="/" class="logo">
          <img src="/static/logo/enforce.svg">
        </a>
  </header>
  <app-live></app-live>
</div>
</template>

<script>
import Live from '../live/live.vue'

export default {
  components: {
    appLive: Live
  }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 8rem;
    background-color: $color-primary;
    display: flex;
    align-content: space-between;

    .logo {

        img {
            height: 4rem;
            margin: 2rem;
        }

    }

}
</style>
