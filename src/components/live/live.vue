<template>
<div class="live">
  <app-values></app-values>
  <div class="plotters">
    <div class="plotters__temperature">
      <app-plotter data="temperature" :color="green" :max="'50'" :min="'-10'"></app-plotter>
    </div>
    <div class="plotters__humidity">
      <app-plotter :data="'humidity'" :color="yellow" :max="'100'" :min="'0'"></app-plotter>
    </div>
    <div class="plotters__pressure">
      <app-plotter :data="'pressure'" :color="blue" :max="'1500'" :min="'500'"></app-plotter>
    </div>
  </div>
</div>
</template>

<script>
import {
  eventBus
} from '@/main'

import Values from './values.vue'
import Plotter from './plotter.vue'

export default {
  data: () => {
    return {
      red: '255, 68, 71',
      green: '0, 255, 0',
      blue: '56, 151, 240',
      yellow: '243, 163, 42'
    }
  },
  sockets: {
    temperature (temp) {
      eventBus.temperature(temp)
      console.log('Temperature:', temp)
    },
    humidity (humi) {
      eventBus.humidity(humi)
      console.log('Humidity:', humi)
    },
    pressure (press) {
      eventBus.pressure(press)
      console.log('Pressure:', press)
    },
    orientation (ori) {
      eventBus.orientation(ori)
      console.log('Orientation:', ori)
    },
    position (pos) {
      eventBus.position(pos)
      console.log('Position:', pos)
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

    .plotters {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 20rem;
        grid-template-areas: "temperature humidity pressure";
        grid-gap: 3vh;
        // padding: calc(6rem + 3vh) 3vh 3vh;

        @include respond(tab-lan) {
            display: block;
        }

        &>* {
          &:not(:last-child) {
            margin-bottom: 3vh;
          }
        }

        &__temperature {
          grid-area: temperature;
        }

        &__humidity {
          grid-area: humidity;
        }

        &__pressure {
          grid-area: pressure;
        }
    }
}
</style>
