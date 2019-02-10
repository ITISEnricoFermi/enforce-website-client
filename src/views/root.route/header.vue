<template>
<header class="header">
  <vue-particles :clickEffect="false">
  </vue-particles>
  <div class="header__text-box">
    <h1 class="title">
         <span class="title__cursor">_</span><span class="title__text">enforce</span>
       </h1>
    <h5 class="subtitle">CanSat 2018</h5>
  </div>
  <img src="layout/arrow_down.svg" class="arrow-down" alt="Scroll down">
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
        width: 100%;
    }

    &__text-box {
        position: absolute;
        @include absCenter;
    }

    .title {
        font-size: 10rem;
        animation: moveInLeft 0.4s;
        backface-visibility: hidden;
        transform: translate3d(0,0,0);

        &__cursor {
            animation: 1s cursorBlink step-end infinite;
        }

        @include respond(phone) {
            font-size: 6rem;
        }
    }

    .subtitle {
        font-size: 2rem;
        margin-top: -3rem;
        animation: moveInBottom 0.4s;

        @include respond(phone) {
          margin-top: -2rem;
        }
    }

    .subtitle,
    .title {
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
