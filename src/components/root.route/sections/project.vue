<template>
<section class="section-project">
  <div class="content">
    <h1 class="heading-primary u-margin-bottom-small">Our project</h1>
    <p class="paragraph">
      The probe will be made by a guidance system, a targeting system and an on-board computer with various sensors connected to it. The CanSat will be powered by a Li-ion battery chosen based on the consumption of the device. The final arrangement will be defined after the experimentation phase. The ground station will be equipped with a transceiver that will be responsible of the communications with the on-board computer. The probe will be managed using a control panel. The ground station will transmit the datas to the server of our site allowing you to see them in real time during the launch.
      La postazione a terra trasmetterà i dati al server del nostro sito permettendo di vederli in tempo reale durante il lancio.
    </p>
  </div>
  <img src="/static/rendering/cansat_bottom_top.png" class="cansat_steel">
</section>
</template>

<script>
export default {
  name: 'project'
}
</script>

<style scoped lang="scss">
.section-project {
    position: relative;
    overflow: hidden;
    background-image: linear-gradient($color-grey-dark-2 , $color-white-light-1);
    // background-image:  url("/static/rendering/cansat_bottom_top.png");
    // background-repeat: no-repeat;
    // background-position: right 2rem;
    // background-size: 60%;

    .content {
        padding: 5rem 10rem;
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
            font-size: 2.5rem;
        }

    }

    .cansat_steel {
        position: absolute;
        top: 5vh;
        right: 1rem;
        // -webkit-filter: drop-shadow(100 0 1rem rgba($color-black, 0.5));
        // filter:         drop-shadow(1rem 0rem 1rem rgba($color-black, 0.5));
        height: 150vh;
        overflow: hidden;
    }

}
</style>
