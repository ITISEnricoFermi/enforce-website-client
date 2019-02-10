<template>
  <section class="section-team">
    <div class="content">
      <div class="profile">
        <div class="profile__side profile__side--front">
          <img src="profile/riccardo_sangiorgio.jpg" alt="Riccardo Sangiorgio" class="pic">
        </div>
        <div class="profile__side profile__side--back">

        </div>
      </div>
      <div class="profile">
        <div class="profile__side profile__side--front">
          <!-- <img src="profile/oleksandr_soludchyk.jpg" alt="Oleksandr Soludchyk" class="pic"> -->
          <p>Ciao come va?""</p>
        </div>
        <div class="profile__side profile__side--back">
          <p>Tutto bene</p>
        </div>
      </div>

      <div class="profile">
        <div class="profile__side profile__side--front">
          <img src="profile/hristo_kamenov.jpg" alt="Hristo Kamenov" class="pic">
        </div>
        <div class="profile__side profile__side--back">

        </div>
      </div>
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

  .content {

    // display: flex;
    // background-color: green;
    // justify-content: center;
    // align-items: center;
    // flex-direction: row;
    // flex-wrap: nowrap;

    // @include respond(tab-lan) {
    //   flex-basis: 25%;
    // }
    //
    // @include respond(tab-por) {
    //   flex-basis: 50%;
    // }
    //
    // @include respond(tab-lan) {
    //   flex-basis: 100%;
    // }
    //

    .profile {
      // width: 20%;
      // cursor: pointer;
      perspective: 150rem;
      position: relative;
      height: 52rem;
      width: 52rem;
      background-color: blue;

      &__side {
        height: 50rem;
        transition: all 0.8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 0.3rem;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

        &--front {
            background-color: red;
          .pic {
            width: 100%;
            height: 100%;
          }

        }

        &--back {
          background-color: green;
          transform: rotateY(180deg);

        }

      }

      &:hover &__side--front{
        transform: rotateY(-180deg);
        background-color: green;
      }

      &:hover &__side--back{
        transform: rotateY(0deg);
        background-color: yellow;
      }

    }

  }

}
</style>
