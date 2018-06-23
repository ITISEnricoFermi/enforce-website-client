<template>
  <section class="section-project">
    <h1 class="heading-primary u-margin-bottom-big">Il nostro progetto</h1>
    <p class="paragraph">
      La sonda sarà composta da un sistema di guida, un sistema di targeting e un computer di bordo con vari sensori collegati ad esso.
      Il CanSat sarà alimentato da una batteria Li-ion scelta in base ai requisiti di consumo del dispositivo.
      L’assetto finale verrà definito al termine della fase di sperimentazione.
      La postazione a terra sarà equipaggiata di una ricetrasmittente che sarà responsabile delle comunicazioni con il computer di bordo.
      La sonda verrà gestita tramite un pannello di controllo.
      La postazione a terra trasmetterà i dati al server del nostro sito permettendo di vederli in tempo reale durante il lancio.
    </p>
  </section>
</template>

<script>
export default {
  name: 'project'
}
</script>

<style scoped lang="scss">
.section-project {
  background-color: $color-white-light-1;
  padding: 10rem;
  height: 100vh;
  position: relative;

  @include respond(tab-lan) {
    padding: 5rem;
    height: auto;
  }

  .heading-primary {
      color: $color-grey-1;
  }

  .paragraph {
    width: 50%;
  }

}
</style>
