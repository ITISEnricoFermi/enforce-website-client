<template>
  <section class="section-live">
    <div class="content">
      <!-- <h1 class="heading-secondary u-margin-bottom-big"><span class="onair"></span>Diretta</h1> -->
      <!-- <app-countdown :end="launch" v-if="countdown"></app-countdown>
    <app-live v-else></app-live> -->
      <h2 class="heading-primary">Join the stream</h2>

      <p class="paragraph">
        During the descent, the CanSat will measure data from different sensors
        (for example temperature, humidity, air pressure, etc.). <br />
        The data will be transmitted in real time to our website and easily
        consulted using graphs and tridimensional representations.
      </p>
      <a href="live/" class="button">
        <span>Join the stream</span>
        <span class="icon"><i class="fas fa-arrow-right"></i></span>
      </a>
    </div>

    <app-calendar></app-calendar>
  </section>
</template>

<script>
// import Countdown from '@/components/countdown/countdown'
// import Live from '@/components/live/live'

import Calendar from "./calendar";

export default {
  name: "live",
  data: () => {
    return {
      launch: new Date(2018, 3, 20, 10, 0, 0, 0).getTime(),
      countdown: true,
    };
  },
  created() {
    if (String(Date.now()) >= String(this.launch)) {
      this.countdown = false;
    } else {
      this.countdown = true;
    }
  },
  components: {
    // appCountdown: Countdown,
    // appLive: Live,
    appCalendar: Calendar,
  },
};
</script>

<style scoped lang="scss">
.section-live {
  background-image: linear-gradient($color-black, $color-secondary);
  padding: 5rem;

  position: relative;

  @include respond(tab-lan) {
    height: auto;
  }

  .content {
    .heading-primary {
      text-align: center;
    }

    .button {
      color: $color-white;
      padding: 1rem 1.5rem;
      width: 20rem;
      background-color: $color-button-red;
      text-decoration: none;
      text-align: center;
      display: block;
      text-align: center;
      margin: 0 auto;
      box-shadow: 0 0 2rem rgba($color-black, 0.5);
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: translateY(-5%);
        box-shadow: 0 0 3rem rgba($color-black, 0.5);
      }

      // &:hover > .icon {
      //   margin-left: 1.5rem;
      // }

      .icon {
        transition: all 0.1s ease-in-out;
        margin-left: 1rem;
      }

      &:active {
        transform: translateY(5%);
        box-shadow: 0 0 2rem rgba($color-black, 0.5);
      }
    }

    .heading-tertiary {
      color: $color-white;
      text-align: center;
    }

    .heading-secondary {
      color: $color-white;
      text-align: center;
    }

    .paragraph {
      color: $color-white;
      text-align: center;
      width: 80%;
      margin: 2rem auto;
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
        margin: 0 2rem 0.75rem;
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
