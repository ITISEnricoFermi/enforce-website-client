<template>
<section class="section-project">
  <div class="content">
    <h1 class="heading-primary u-margin-bottom-small">Our project</h1>
    <p class="paragraph">
      The probe has three main parts: a guidance system, a targeting system and an on-board computer (to which everything is connected). The CanSat will be powered by a Li-ion battery chosen based on the power consumption of the device. The final arrangement
      will be defined after the experimentation phase. The ground station will be equipped with a transceiver that will enable communications with the on-board computer. The probe will be managed using a web-based control panel. The ground station will
      send updates to our website's server allowing everyone to see our data in real time during the launch.
    </p>
  </div>
  <img src="rendering/cansat_bottom_top.png" class="cansat_pic">
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
    // background-image:  url("rendering/cansat_bottom_top.png");
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
            text-align: center;

            color: $color-grey-1;

            @include respond(tab-lan) {
              text-align: left;
            }
        }

        .paragraph {
            width: 50%;
            font-size: 2.5rem;

            @include respond(tab-lan) {
                width: 100%;
            }
        }

    }

    .cansat_pic {
        position: absolute;
        top: 5vh;
        right: 1rem;
        // -webkit-filter: drop-shadow(100 0 1rem rgba($color-black, 0.5));
        // filter:         drop-shadow(1rem 0rem 1rem rgba($color-black, 0.5));
        height: 150vh;
        overflow: hidden;

        @include respond(tab-lan) {
            bottom: 0;
            top: auto;
            height: 100vh;
            display: none;
        }
    }

}
</style>
