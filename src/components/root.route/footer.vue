<template>
<footer class="footer">
  <div class="content">
    <div class="left">
      <img src="/static/logo/itisFermi_white.svg" alt="ITIS Enrico Fermi, Roma" class="logo">
    </div>
    <div class="right">
      <p class="legal">ITIS Enrico Fermi / Via Trionfale 8737 - 00135 Roma (RM)</p>
    </div>
  </div>
</footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
    position: relative;
    padding: 10rem;

    @include respond(phone) {
      padding: 5rem;
    }

    .content {
        display: table;
        width: 100%;

        .left {
          display: table-cell;
          vertical-align: middle;
          height: 8vh;

          .logo {
              height: 100%;
          }

        }

        .right {
          display: table-cell;
          vertical-align: middle;

          .legal {
            color: $color-white;
            float: right;
            width: 90%;
            text-align: right;
          }

        }

    }

}
</style>
