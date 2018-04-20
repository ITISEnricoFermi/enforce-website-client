<template>
<div class="values u-margin-bottom-medium">
  <transition name="fade">
    <p class="value">
      <span class="number">{{ data.temperature + '°' }}</span>
      <span class="tag tag--temperature">Temperatura</span></p>
  </transition>
  <transition name="fade">
    <p class="value">
      <span class="number">{{ data.humidity + '%' }}</span>
      <span class="tag tag--humidity">Umidità</span></p>
  </transition>
  <transition name="fade">
    <p class="value">
      <span class="number">{{ data.pressure + 'Pa' }}</span>
      <span class="tag tag--pressure">Pressione</span></p>
  </transition>
  <transition name="fade">
    <p class="value">
      <span class="number">{{ data.altitude + 'm' }}</span>
      <span class="tag tag--altitude">Altitudine</span></p>
  </transition>
</div>
</template>

<script>
export default {
  name: 'values',
  data: () => {
    return {
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
      this.data.temperature = Number(temp).toFixed(2)
    },
    humidity (humi) {
      this.data.humidity = Number(humi).toFixed(2)
    },
    pressure (press) {
      this.data.pressure = Number(press).toFixed(2)
    },
    orientation (ori) {
      this.data.orientation = ori
    },
    position (pos) {
      this.data.position = pos
    }
  }
}
</script>

<style scoped lang="scss">
.values {
    color: $color-white;
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(1, 4);
    grid-template-areas: ". . . . ";
    grid-gap: 2rem;

    @include respond(phone) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(1fr, 2);
        grid-template-areas: ". ." ". .";
        grid-gap: 2rem;
    }

    .value {
        font-size: 8rem;
        text-align: center;

        @include respond(tab-lan) {
            font-size: 4rem;
        }

        .number {
            display: block;
        }

        .tag {
            margin: 0.5rem;
            display: block;
            font-size: 2rem;

            &--temperature {
                color: rgb(0, 255, 0);
            }

            &--humidity {
                color: rgb(243, 163, 42);
            }

            &--pressure {
                color: rgb(56, 151, 240);
            }

            &--altitude {
                color: rgb(255, 68, 71);
            }

        }

    }
}
</style>
