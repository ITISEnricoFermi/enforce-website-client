<template>
  <section class="section-targets">
    <h1 class="heading-primary u-margin-bottom-big">I nostri obiettivi</h1>

    <div class="target u-margin-bottom-small">
      <h4 class="heading-fourth u-margin-bottom-small">Mission Control Panel</h4>
      <p class="paragraph-small">Progettare un pannello di controllo mediante il quale sarà possibile analizzare in tempo reale tutte le rilevazioni telemetriche, mediante l’uso di grafici e rappresentazioni tridimensionali.</p>
    </div>

    <div class="target u-margin-bottom-small">
      <h4 class="heading-fourth u-margin-bottom-small">Diretta web</h4>
      <p class="paragraph-small">Trasmettere in diretta e pubblicamente sul nostro sito web i dati inviati dalla sonda. </p>
    </div>

    <div class="target u-margin-bottom-small">
      <h4 class="heading-fourth u-margin-bottom-small">Atterraggio autonomo</h4>
      <p class="paragraph-small">Realizzare un sistema di guida che permetta al CanSat di atterrare autonomamente in un punto prestabilito.</p>
    </div>

    <div class="target u-margin-bottom-small">
      <h4 class="heading-fourth u-margin-bottom-small">Video della discesa</h4>
      <p class="paragraph-small">Catturare il video della discesa per mezzo di una telecamera montata a bordo della sonda.</p>
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
  background-color: $color-white-light-1;
  padding: 10rem;
  position: relative;
  min-height: 100vh;

  @include respond(tab-lan) {
    padding: 5rem;
  }

  .target {
    //background-color: rgba($color-white, 0.85);
    //box-shadow: 0 0rem 2rem rgba($color-black, 0.65);
    padding: 1rem;
  }

}
</style>
