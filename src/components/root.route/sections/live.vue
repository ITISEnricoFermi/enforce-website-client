<template>
<section class="section-live">
  <div class="content">
    <h1 class="heading-primary u-margin-bottom-big"><span class="onair"></span>Diretta</h1>
    <app-countdown :end="new Date(2018, 3, 20, 9, 0, 0, 0).getTime()"></app-countdown>
  </div>
</section>
</template>

<script>
import Countdown from '@/components/countdown/countdown'

export default {
  name: 'live',
  components: {
    appCountdown: Countdown
  }
}
</script>

<style scoped lang="scss">
.section-live {
    background-image: linear-gradient($color-black, $color-blue-1);
    padding: 10rem;
    height: 100vh;
    position: relative;

    @include respond(tab-lan) {
      height: auto;
    }

    .content {

        .heading-primary {
            color: $color-white;
        }

        .onair {
            display: inline-block;
            height: 6rem;
            width: 6rem;
            border-radius: 100rem;
            background-color: $color-red-1;
            margin: 0.5rem 2rem;
            z-index: 100;

            @include respond(phone) {
              height: 4rem;
              width: 4rem;
              margin: 0.25rem 2rem;
            }

            &::after {
                content: "";
                height: 6rem;
                width: 6rem;
                border-radius: 100rem;
                background-color: lighten($color-red-1, 10%);
                z-index: -99;
                position: absolute;
                animation: 1s onair infinite;

                @include respond(phone) {
                  height: 4rem;
                  width: 4rem;
                }

            }
        }

    }
}
</style>
