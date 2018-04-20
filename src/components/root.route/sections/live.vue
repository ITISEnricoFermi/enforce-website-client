<template>
<section class="section-live">
  <div class="content">
    <h1 class="heading-secondary u-margin-bottom-big"><span class="onair"></span>Diretta</h1>
    <!-- <app-countdown :end="launch" v-if="countdown"></app-countdown>
    <app-live v-else></app-live> -->
    <app-live></app-live>
  </div>
</section>
</template>

<script>
import Countdown from '@/components/countdown/countdown'
import Live from '@/components/live/live'

export default {
  name: 'live',
  data: () => {
    return {
      launch: new Date(2018, 3, 20, 10, 0, 0, 0).getTime(),
      countdown: true
    }
  },
  created () {
    if (String(Date.now()) >= String(this.launch)) {
      this.countdown = false
    } else {
      this.countdown = true
    }
  },
  components: {
    appCountdown: Countdown,
    appLive: Live
  }
}
</script>

<style scoped lang="scss">
.section-live {
    background-image: linear-gradient($color-black, $color-blue-1);
    padding: 5rem;
    min-height: 100vh;
    position: relative;

    @include respond(tab-lan) {
      height: auto;
    }

    .content {

        .heading-secondary {
            color: $color-white;
            text-align: center;
        }

        .onair {
            display: inline-block;
            height: 4.5rem;
            width: 4.5rem;
            border-radius: 100rem;
            background-color: $color-red-1;
            margin: 0.5rem 2rem;
            z-index: 100;
            position: relative;

            @include respond(phone) {
              height: 4rem;
              width: 4rem;
              margin: 0rem 2rem 0.75rem 2rem;
            }

            &::after {
                content: "";
                height: 5rem;
                width: 5rem;
                border-radius: 100rem;
                top: 50%;
                left: 50%;
                background-color: lighten($color-red-1, 10%);
                z-index: -99;
                position: absolute;
                animation: 1s onair infinite;
                @include absCenter;

                @include respond(phone) {
                  height: 5rem;
                  width: 5rem;
                }

            }
        }

    }
}
</style>
