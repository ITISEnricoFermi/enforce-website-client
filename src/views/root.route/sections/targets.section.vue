<template>
  <section class="section-targets">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="videos/lancio.mp4" type="video/mp4" />
        <!-- <source src="img/video.webm" type="video/webm"> -->
        Il tuo browser non è supportato!
      </video>
    </div>
    <div class="content">
      <h1 class="heading-primary u-margin-bottom-big">Our targets</h1>
      <div class="targets">
        <div class="target">
          <i class="fas fa-tachometer-alt"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Mission Control Panel
          </h3>
          <p class="target__text">
            Control panel for manual control of the probe and real time analisys
            of all the captured data.
          </p>
        </div>
        <div class="target">
          <i class="fas fa-chart-area"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Live broadcast</h3>
          <p class="target__text">
            Live broadcast of all the data collected by the probe on our
            website.
          </p>
        </div>
        <div class="target">
          <i class="fas fa-parachute-box"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Autonomous landing
          </h3>
          <p class="target__text">
            Guidance system and autonomous landing on predetermined coordinates.
          </p>
        </div>
        <div class="target">
          <i class="fas fa-video"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Landing video</h3>
          <p class="target__text">
            Video recording of the descent using a camera mounted on the bottom
            of the probe.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "targets",
};
</script>

<style scoped lang="scss">
.section-targets {
  // background-color: $color-white-light-1;
  position: relative;

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -99;
    opacity: 0.45;
    overflow: hidden;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 5rem 10rem;
    position: relative;

    @include respond(tab-lan) {
      padding: 5rem;
    }

    .heading-primary {
      text-align: center;

      @include respond(tab-lan) {
        text-align: left;
      }
    }

    .targets {
      // position: absolute;
      // @include absCenter;
      width: 100%;
      display: flex;
      align-items: center;

      @include respond(tab-lan) {
        position: static;
        width: 100%;
        flex-wrap: wrap;
        top: 0;
        left: 0;
        transform: translate(0, 0);
      }

      .target {
        background-color: rgba($color-white, 0.8);
        font-size: 1.5rem;
        padding: 1.5rem;
        text-align: center;
        border-radius: 0.3rem;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
        transition: all 0.2s;
        margin: 0 2rem;

        @include respond(tab-lan) {
          margin: 2rem;
          width: 100%;
        }

        i {
          font-size: 6rem;
          margin-bottom: 2rem;
          -webkit-background-clip: text;
        }

        &:hover {
          transform: translateY(-1.5rem) scale(1.03);
        }
      }
    }
  }
}
</style>
