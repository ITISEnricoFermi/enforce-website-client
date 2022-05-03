<template>
  <div class="calendar">
    <p class="heading">Next launches</p>
    <div class="content">
      <div class="event">
        <div class="month">
          <p>April 2018</p>
        </div>
        <div class="day">
          <p>20</p>
        </div>
      </div>
      <div class="event">
        <div class="month">
          <p>June 2018</p>
        </div>
        <div class="day">
          <p>29</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
};
</script>

<style scoped lang="scss">
.calendar {
  position: relative;
  width: 100%;

  .heading {
    text-align: center;
    padding: 4rem 0 1rem 0;
  }

  .content {
    text-align: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .event {
      border-radius: 0.25rem;
      // max-width: 10%;
      // display: inline-block;
      margin: 2rem;
      cursor: pointer;
      box-shadow: 0 0 1rem rgba($color-black, 1);
      transition: all 0.2s ease-in-out;

      @include respond(tab-lan) {
        // display: block;
        // margin: 2rem 0;
        // max-width: 100%;
      }

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 2rem rgba($color-black, 1);
      }

      .month {
        background-color: $color-button-red;
        p {
          color: $color-white;
          text-align: center;
        }
      }

      .day {
        background-color: $color-white;
        padding: 0 2rem;

        p {
          font-size: 6rem;
          color: $color-black;
          text-align: center;
        }
      }
    }
  }
}
</style>
