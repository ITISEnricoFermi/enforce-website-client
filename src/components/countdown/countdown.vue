<template>
  <div class="countdown">
    <p class="days">{{ interval.days }}<span class="tag">giorni</span></p>
    <p class="hours">{{ interval.hours }}<span class="tag">ore</span></p>
    <p class="minutes">{{ interval.minutes }}<span class="tag">minuti</span></p>
    <p class="seconds">{{ interval.seconds }}<span class="tag">secondi</span></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

<script>
export default {
  name: 'countdown',
  props: ['end'],
  data: () => {
    return {
      expiration: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  computed: {
    interval: {
      get () {
        return this.expiration
      },
      set (milliseconds) {
        this.expiration = {
          days: Math.floor(milliseconds / (1000 * 60 * 60 * 24)),
          hours: Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((milliseconds % (1000 * 60)) / 1000)
        }
      }
    }
  },
  created () {
    setInterval(() => {
      this.interval = this.end - Date.now()
      this.$emit('tick', this.interval)
    }, 1000)
  }
}
</script>

<style scoped lang="scss">
.countdown {
  color: $color-white;
  width: 100%;
  text-align: center;

  p {
      display: inline-block;
      font-size: 15rem;
      margin: 2rem 5rem;

      span {
        margin: 0.5rem;
        display: block;
        font-size: 5rem;
      }

  }

}
</style>
