<template>
<div class="live">
  <app-values></app-values>
  <app-plotter></app-plotter>
</div>
</template>

<script>

import Values from './values.vue'
import Plotter from './plotter.vue'

export default {
  data: () => {
    return {

    }
  },
  components: {
    appValues: Values,
    appPlotter: Plotter
  }
}
</script>

<style scoped lang="scss">
.live {
    width: 100%;
}
</style>
