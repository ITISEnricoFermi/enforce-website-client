<template>
<div class="main">
  <header class="header">
    <a href="/" class="logo">
          <img src="logo/enforce.svg">
        </a>
  </header>
  <app-live></app-live>
</div>
</template>

<script>
import Live from '@/components/live/live'

export default {
  components: {
    appLive: Live
  }
}
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100vh;

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

  .live {
    height: calc(100% - 8rem);
  }

}
</style>
