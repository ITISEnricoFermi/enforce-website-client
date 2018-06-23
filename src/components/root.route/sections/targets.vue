<template>
<section class="section-targets">
  <div class="bg-video">
    <video class="bg-video__content" autoplay muted loop>
        <source src="/static/videos/lancio.mp4" type="video/mp4">
        <!-- <source src="img/video.webm" type="video/webm"> -->
          Il tuo browser non è supportato!
      </video>
  </div>
  <h1 class="heading-primary u-margin-bottom-big">I nostri obiettivi</h1>
  <div class="targets">
    <div class="target">
      <i class="fas fa-tachometer-alt"></i>
      <h3 class="heading-tertiary u-margin-bottom-small">Mission Control Panel</h3>
      <p class="target__text">
        Progettare un pannello di controllo mediante il quale sarà possibile analizzare in tempo reale tutte le rilevazioni telemetriche, mediante l’uso di grafici e rappresentazioni tridimensionali.
      </p>
    </div>
    <div class="target">
      <i class="fas fa-chart-area"></i>
      <h3 class="heading-tertiary u-margin-bottom-small">Diretta web</h3>
      <p class="target__text">
        Trasmettere in diretta e pubblicamente sul nostro sito web i dati inviati dalla sonda.
      </p>
    </div>
    <div class="target">
      <i class="fas fa-parachute-box"></i>
      <h3 class="heading-tertiary u-margin-bottom-small">Atterraggio autonomo</h3>
      <p class="target__text">
        Realizzare un sistema di guida che permetta al CanSat di atterrare autonomamente in un punto prestabilito.
      </p>
    </div>
    <div class="target">
      <i class="fas fa-video"></i>
      <h3 class="heading-tertiary u-margin-bottom-small">Video della discesa</h3>
      <p class="target__text">
        Catturare il video della discesa per mezzo di una telecamera montata a bordo della sonda.
      </p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'targets'
}
</script>

<style scoped lang="scss">
.section-targets {
    // background-color: $color-white-light-1;
    padding: 4rem 5rem;
    position: relative;
    min-height: 100vh;

    @include respond(tab-lan) {
        padding: 5rem;
    }

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

    .heading-primary {
        text-align: center;
    }

    .targets {
        position: absolute;
        @include absCenter;
        width: 90%;
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
</style>
