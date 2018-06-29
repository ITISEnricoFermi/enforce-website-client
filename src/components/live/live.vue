<template>
<div class="live">
  <div class="content">
    <div class="plotter-box">
      <app-plotter data="temperature" :color="green" :max="'50'" :min="'-10'"></app-plotter>
      <div class="values">
        <p class="tag">Temperature</p>
        <p class="value">{{ data.temperature + '°' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'humidity'" :color="yellow" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Humidity</p>
        <p class="value">{{ data.humidity + '%' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'pressure'" :color="blue" :max="'1500'" :min="'500'"></app-plotter>
      <div class="values">
        <p class="tag">Pressure</p>
        <p class="value">{{ data.pressure + 'hPa' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'altitude'" :color="red" :max="'2000'" :min="'-500'"></app-plotter>
      <div class="values">
        <p class="tag">Altitude</p>
        <p class="value">{{ data.altitude + 'm' }}</p>
      </div>
    </div>
    <div class="model-box">
        <app-model></app-model>
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
import Model from '@/components/model/model'

export default {
  data: () => {
    return {
      red: '255, 68, 71',
      green: '0, 255, 0',
      blue: '56, 151, 240',
      yellow: '243, 163, 42',
      data: {
        temperature: 0,
        humidity: 0,
        pressure: 0,
        altitude: 0
      }
    }
  },
  sockets: {
    temperature (temp) {
      eventBus.temperature(temp)
      this.data.temperature = Number(temp)
    },
    humidity (humi) {
      eventBus.humidity(humi)
      this.data.humidity = Number(humi)
    },
    pressure (press) {
      eventBus.pressure(press)
      this.data.pressure = Number(press)
    },
    altitude (alt) {
      eventBus.altitude(alt)
      this.data.altitude = Number(alt)
    },
    orientation (ori) {
      eventBus.orientation(ori)
      this.data.orientation = ori
    },
    position (pos) {
      eventBus.position(pos)
      this.data.position = pos
    }
  },
  components: {
    appValues: Values,
    appPlotter: Plotter,
    appModel: Model
  }
}
</script>

<style scoped lang="scss">
.live {
    width: 100%;

    .content {
        width: 100%;
        height: 100%;
        padding: 3vh;
        display: grid;
        grid-gap: 3vh;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'temperature temperature humidity humidity pressure pressure' 'altitude altitude altitude model model model';

        @include respond(tab-lan) {
            display: block;
        }

        & > * {

          @include respond(tab-lan) {
              min-height: 20rem;
          }

          &:nth-child(1) {
            grid-area: temperature;
          }

          &:nth-child(2) {
            grid-area: humidity;
          }

          &:nth-child(3) {
            grid-area: pressure;
          }

          &:nth-child(4) {
            grid-area: altitude;
          }

          &:nth-child(5) {
            grid-area: model;
          }

        }

        .plotter-box, .model-box {
          box-shadow: 0 0 2rem rgba($color-black,0.5);
          border-radius: 0.25rem;
          overflow: hidden;

          @include respond(tab-lan) {

            &:not(:last-child) {
              margin-bottom: 3vh;
            }
          }

        }

        .plotter-box {

            .plotter {
              height: calc(100% - 4rem);
            }

            .values {
                height: 4rem;
                width: 100%;
                background-color: $color-white-light-1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;

                .tag {
                    font-size: 2rem;
                    color: $color-grey-1;
                }

                .value {
                    color: $color-grey-1;
                }
            }
        }
    }

    // .models {
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: space-between;
    //     padding: 1.5vh;
    //     display: none;
    //
    //     @include respond(tab-lan) {
    //         display: block;
    //     }
    //
    //     & > * {
    //         flex: 1 1 auto;
    //         margin: 1.5vh;
    //         box-shadow: 0 0 2rem rgba($color-black,0.5);
    //     }
    //
    // }
}

// .models {
//     margin-top: 3vh;
// }
</style>
