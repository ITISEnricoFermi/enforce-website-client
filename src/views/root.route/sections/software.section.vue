<template>
  <section class="section-software">
    <div class="slider"></div>
  </section>
</template>

<script>
export default {
  name: "software",
};
</script>

<style scoped lang="scss">
.section-software {
  background-image: linear-gradient(to left bottom, #071930, $color-secondary);
  padding: 10rem;
  height: 100vh;
  position: relative;

  @include respond(tab-lan) {
    padding: 5rem;
    height: auto;
  }

  .slider {
    background-color: rgba($color-white, 0.85);
    width: 80%;
    height: 80%;
    position: absolute;
    @include absCenter;
    border-radius: 3rem;
    box-shadow: 0 0rem 2rem rgba($color-black, 0.65);
  }
}
</style>
