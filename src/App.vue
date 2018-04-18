<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  sockets: {
    connect () {
      console.log('Connected.')
    },
    disconnect () {
      console.log('Connection lost.')
    },
    data (data) {
      console.log(data)
    }
  }
}
</script>

<style>

</style>
