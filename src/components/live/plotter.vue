<template>
<div class="plotter">
  <canvas :id="'chart' + data"></canvas>
</div>
</template>

<script>
import {
  SmoothieChart,
  TimeSeries
} from 'smoothie'

import {
  eventBus
} from '@/main'

export default {
  name: 'plotter',
  props: ['data', 'color', 'max', 'min'],
  data: () => {
    return {
      timeSerie: new TimeSeries()
    }
  },
  mounted () {
    // Find the canvas
    let canvas = document.getElementById('chart' + this.data)
    canvas.width = (canvas.parentNode.parentNode.offsetWidth * 2) + 'px'
    canvas.height = (canvas.parentNode.offsetHeight * 2) + 'px'

    // Create the chart
    let chart = new SmoothieChart({
      millisPerPixel: 50,
      labels: {
        fontSize: 25
      },
      grid: {
        borderVisible: false
      },
      tooltip: true,
      // timestampFormatter: SmoothieChart.timeFormatter,
      responsive: true
      // maxValue: this.max,
      // minValue: this.min
    })

    chart.addTimeSeries(this.timeSerie, {
      strokeStyle: `rgba(${this.color}, 1)`,
      fillStyle: `rgba(${this.color}, 0.2)`,
      lineWidth: 4
    })
    chart.streamTo(canvas, 500)

    let self = this

    eventBus.$on(`${this.data}`, (data) => {
      self.timeSerie.append(Date.now(), data)
    })
  }
}
</script>

<style scoped lang="scss">
.plotter {
    width: 100%;
    background-color: $color-black;
    height: 20rem;
    border-radius: 0.25rem;
    overflow: hidden;

    canvas {
        padding: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
    }
}
</style>
