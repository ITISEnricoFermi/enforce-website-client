<template>
  <header class="header">
     <vue-particles :clickEffect="false">
     </vue-particles>
     <div class="header__text-box">
       <h1 class="heading-primary"><span class="heading-primary--cursor">_</span>enforce</h1>
       <h5 class="heading-fifth">Modena 2018</h5>
     </div>
    <img src="/static/layout/arrow_down.svg" class="arrow-down" alt="Scroll down">
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.header {
  background-color: $color-grey-1;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  div:first-child {
    height: 100%;
  }

  &__text-box {
    position: absolute;
    @include absCenter;
  }

  .heading-primary, .heading-fifth {
    color: rgba($color-white, 0.85);
  }

  .arrow-down {
    width: 3rem;
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: arrowDown 5s infinite ease-in-out;
  }

}

</style>
