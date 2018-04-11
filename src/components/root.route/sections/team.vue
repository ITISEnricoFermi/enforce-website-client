<template>
  <section class="section-team">
    <div class="content">
      <div class="big big--top"></div>
      <div class="big big--right"></div>
      <div class="center"></div>
      <div class="big big--bottom"></div>
      <div class="big big--left"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'team'
}
</script>

<style scoped lang="scss">

.section-team {
  background-image: linear-gradient(to left bottom, #071930, #023852);
  height: 100vh;
  position: relative;

  .content {
    height: 100%;
    position: relative;

    & > * {
      cursor: pointer;
      transition: all 0.1s ease-in-out;
    }

    .center {
      padding-top: 20%;
      width: 20%;
      box-shadow: 0 0rem 3rem rgba($color-black, 0.65);
      border-radius: 100rem;
      background-image: linear-gradient(to right bottom, rgba(0,0,0,0.1) 30%, rgba(255,255,255,.01)), url('/static/logo/logo.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: screen;
      position: absolute;
      @include absCenter;

      &:hover {
        box-shadow: 0 0rem 4rem rgba($color-black, 0.65);
        padding-top: 21%;
        width: 21%;
      }

    }

    .big {
      padding-top: 10%;
      width: 10%;
      box-shadow: 0 0rem 3rem rgba($color-black, 0.65);
      border-radius: 100rem;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      transform: translate(-50%, -50%);

      &:hover {
        box-shadow: 0 0rem 4rem rgba($color-black, 0.65);
        padding-top: 11%;
        width: 11%;
      }

      &--top {
        background-image: linear-gradient(to right bottom, rgba(0,0,0,0.1) 30%, rgba(255,255,255,.01)), url('/static/profile/jacopo_evangelisti.png');
        top: 17.5%;
        left: 50%;
      }

      &--right {
         background-image: linear-gradient(to right bottom, rgba(0,0,0,0.1) 30%, rgba(255,255,255,.01)), url('/static/profile/hristo_kamenov.png');
         top: 50%;
         left: 67.25%;
      }

      &--bottom {
        background-image: linear-gradient(to right bottom, rgba(0,0,0,0.1) 30%, rgba(255,255,255,.01)), url('/static/profile/oleksandr_soludchyk.png');
        top: 82.5%;
        left: 50%;
      }

      &--left {
        background-image: linear-gradient(to right bottom, rgba(0,0,0,0.1) 30%, rgba(255,255,255,.01)), url('/static/profile/riccardo_sangiorgio.png');
        top: 50%;
        left: 32.5%;
      }

    }

  }

}
</style>
