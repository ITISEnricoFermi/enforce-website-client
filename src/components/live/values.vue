<template>
  <div class="values u-margin-bottom-medium">
    <transition name="fade">
      <p class="value">
        <span class="number">{{ data.temperature + '°' }}</span>
        <span class="tag">Temperatura</span></p>
    </transition>
    <transition name="fade">
      <p class="value">
        <span class="number">{{ data.humidity + '%' }}</span>
        <span class="tag">Umidità</span></p>
    </transition>
    <transition name="fade">
      <p class="value">
        <span class="number">{{ data.pressure + 'Pa' }}</span>
        <span class="tag">Pressione</span></p>
    </transition>
    <transition name="fade">
      <p class="value">
        <span class="number">{{ data.altitude + 'm' }}</span>
        <span class="tag">Altitudine</span></p>
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
      this.data.temperature = temp
    },
    humidity (humi) {
      this.data.humidity = humi
    },
    pressure (press) {
      this.data.pressure = press
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
        }

    }
}
</style>
